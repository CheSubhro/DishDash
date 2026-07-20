
import { asyncHandler } from '../utils/AsyncHandler.js'
import { ApiError } from '../utils/ApiError.js'
import HttpStatus from '../utils/HttpStatus.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import { User } from '../models/user.model.js'
import { ActivityLog } from "../models/activityLog.model.js";
import { uploadOnCloudinary, deleteFromCloudinary }  from '../utils/Cloudinary.js'
import { lowercase } from '../utils/StringUtils.js'
import { generateUserTokens } from "../utils/TokenManager.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { logActivity } from "../utils/Logger.js";


const registerUser = asyncHandler(async (req, res) => {
    
    const { fullName, email, username, password, role } = req.body;

    if ([fullName, email, username, password].some((field) => field?.trim() === "")) {
        throw new ApiError(HttpStatus.BAD_REQUEST, "All fields are required");
    }

    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    });

    if (existedUser) {
        throw new ApiError(HttpStatus.CONFLICT, "User with email or username already exists");
    }

    const lowercaseUsername = lowercase(username);

    const DEFAULT_AVATAR = "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=200&h=200";
    const DEFAULT_COVER = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800&h=400";

    let avatarUrl = DEFAULT_AVATAR; 
    let coverImageUrl = DEFAULT_COVER;

    if (req.files?.avatar?.[0]?.path) {
        const avatar = await uploadOnCloudinary(req.files.avatar[0].path);
        if (avatar) avatarUrl = avatar.url;
    }

    if (req.files?.coverImage?.[0]?.path) {
        const coverImage = await uploadOnCloudinary(req.files.coverImage[0].path);
        if (coverImage) coverImageUrl = coverImage.url;
    }

    const userRole = role ? role.toLowerCase() : "user";

    const user = await User.create({
        fullName,
        avatar: avatarUrl, 
        coverImage: coverImageUrl,
        email,
        password,
        username: lowercaseUsername,
        role: userRole
    });

    const createdUser = await User.findById(user._id).select("-password -refreshToken");

    if (!createdUser) {
        throw new ApiError(HttpStatus.INTERNAL_SERVER_ERROR, "Something went wrong while registering the user");
    }

    await logActivity(
        user._id,                                             
        "REGISTER_USER",                                      
        `New user registered with username: ${user.username}`, 
        user._id,                                             
        req.ip                                                
    );

    return res.status(HttpStatus.CREATED).json(
        new ApiResponse(HttpStatus.CREATED, createdUser, "User registered Successfully")
    );
});

const loginUser = asyncHandler(async (req, res) => {

    const { email, username, password } = req.body;

    const user = await User.findOne({
        $or: [{ username: username || "" }, { email: email || "" }]
    });

    if (!user) {
        throw new ApiError(HttpStatus.NOT_FOUND, "User does not exist");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        throw new ApiError(HttpStatus.UNAUTHORIZED, "Invalid user credentials");
    }

    const { accessToken, refreshToken } = await generateUserTokens(user._id);
    const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

    const options = {
        httpOnly: true,
        secure: true
    };

    return res
        .status(HttpStatus.OK)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(
                HttpStatus.OK,
                { user: loggedInUser, accessToken, refreshToken },
                "User logged in successfully"
            )
        );
});

const refreshAccessToken = asyncHandler(async (req, res) => {

    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken;

    if (!incomingRefreshToken) {
        throw new ApiError(HttpStatus.UNAUTHORIZED, "Unauthorized request");
    }

    const decodedToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET);
    
    const user = await User.findById(decodedToken?._id);

    if (!user || incomingRefreshToken !== user.refreshToken) {
        throw new ApiError(HttpStatus.UNAUTHORIZED, "Refresh token is expired or invalid");
    }

    const { accessToken, refreshToken: newRefreshToken } = await generateUserTokens(user._id);

    const options = {
        httpOnly: true,
        secure: true
    };

    return res
        .status(HttpStatus.OK)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", newRefreshToken, options)
        .json(
            new ApiResponse(HttpStatus.OK, { accessToken, refreshToken: newRefreshToken }, "Access token refreshed")
        );
});

const getCurrentUser = asyncHandler(async (req, res) => {
    return res
        .status(HttpStatus.OK)
        .json(new ApiResponse(HttpStatus.OK, req.user, "User fetched successfully"));
});

const logoutUser = asyncHandler(async (req, res) => {

    await User.findByIdAndUpdate(
        req.user._id,
        { $unset: { refreshToken: 1 } },
        { new: true }
    );

    const options = {
        httpOnly: true,
        secure: true
    };

    return res
        .status(HttpStatus.OK)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponse(HttpStatus.OK, {}, "User logged out successfully"));
});

const getAllLogs = asyncHandler(async (req, res) => {

    const logs = await ActivityLog.find().sort({ timestamp: -1 });
    return res
    .status(HttpStatus.OK)
    .json(new ApiResponse(HttpStatus.OK, logs, "Logs fetched successfully"));
});

const changeCurrentPassword = asyncHandler(async (req, res) => {

    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
        throw new ApiError(HttpStatus.BAD_REQUEST, "Both old and new passwords are required");
    }

    const user = await User.findById(req.user?._id);

    const isPasswordCorrect = await bcrypt.compare(oldPassword, user.password);
    if (!isPasswordCorrect) {
        throw new ApiError(HttpStatus.UNAUTHORIZED, "Invalid old password");
    }

    user.password = newPassword; 
    await user.save({ validateBeforeSave: false });

    await logActivity(req.user._id, "PASSWORD_CHANGE", req.user._id, `User changed their own password`, req.ip);
    return res
        .status(HttpStatus.OK)
        .json(new ApiResponse(HttpStatus.OK, {}, "Password changed successfully"));
});

export {
    registerUser,
    loginUser,
    refreshAccessToken,
    getCurrentUser,
    logoutUser,
    getAllLogs,
    changeCurrentPassword
}




