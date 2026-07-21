
import { asyncHandler } from '../utils/AsyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import HttpStatus from '../utils/HttpStatus.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { MenuItem } from '../models/menuItem.model.js';
import { logActivity } from "../utils/Logger.js";
import { uploadOnCloudinary, deleteFromCloudinary } from '../utils/Cloudinary.js';

const addMenuItem = asyncHandler(async (req, res) => {

    const { name, price, description, category, isAvailable } = req.body;

    if (!name || !price || !category) {
        throw new ApiError(HttpStatus.BAD_REQUEST, "Name, price, and category are required");
    }

    let imageUrl = "";
    if (req.file?.path) {
        const uploadResult = await uploadOnCloudinary(req.file.path);
        if (uploadResult) imageUrl = uploadResult.url;
    }

    const menuItem = await MenuItem.create({
        name: name.trim(),
        price,
        description,
        category,
        image: imageUrl,
        isAvailable: isAvailable ?? true
    });

    await menuItem.populate('category');

    await logActivity(
        req.user?._id,
        "ADD_MENU_ITEM",
        `New menu item added: ${menuItem.name}`,
        menuItem._id,
        req.ip
    );

    return res.status(HttpStatus.CREATED).json(
        new ApiResponse(HttpStatus.CREATED, menuItem, "Menu item added successfully")
    );
});

const getAllMenuItems = asyncHandler(async (req, res) => {
    
    const { categoryId } = req.query;
    const filter = categoryId ? { category: categoryId } : {};

    const menuItems = await MenuItem.find(filter).populate("category", "name type");

    return res.status(HttpStatus.OK).json(
        new ApiResponse(HttpStatus.OK, menuItems, "Menu items fetched successfully")
    );
});

const editMenuItem = asyncHandler(async (req, res) => {

    const { itemId } = req.params;
    const { name, price, description, category,isAvailable } = req.body;

    const menuItem = await MenuItem.findById(itemId);
    if (!menuItem) {
        throw new ApiError(HttpStatus.NOT_FOUND, "Menu item not found");
    }

    if (req.file?.path) {
        if (menuItem.image) {
            await deleteFromCloudinary(menuItem.image);
        }

        const uploadResult = await uploadOnCloudinary(req.file.path);
        if (uploadResult) {
            menuItem.image = uploadResult.url;
        }
    }

    if (name) menuItem.name = name.trim();
    if (price !== undefined) {
        menuItem.price = price;
    }
    if (description) menuItem.description = description;
    if (category !== undefined && category !== '') {
        menuItem.category = category;
    }
    if (isAvailable !== undefined) menuItem.isAvailable = isAvailable;

    await menuItem.save();
    await menuItem.populate('category', 'name type');

    await logActivity(
        req.user?._id,
        "EDIT_MENU_ITEM",
        `Menu item updated: ${menuItem.name}`,
        menuItem._id,
        req.ip
    );

    return res.status(HttpStatus.OK).json(
        new ApiResponse(HttpStatus.OK, menuItem, "Menu item updated successfully")
    );
});

const deleteMenuItem = asyncHandler(async (req, res) => {

    const { itemId } = req.params;

    const menuItem = await MenuItem.findById(itemId);
    if (!menuItem) {
        throw new ApiError(HttpStatus.NOT_FOUND, "Menu item not found");
    }

    if (menuItem.image) {
        await deleteFromCloudinary(menuItem.image);
    }

    await MenuItem.findByIdAndDelete(itemId);

    await logActivity(
        req.user?._id,
        "DELETE_MENU_ITEM",
        `Menu item deleted: ${menuItem.name}`,
        itemId,
        req.ip
    );

    return res.status(HttpStatus.OK).json(
        new ApiResponse(HttpStatus.OK, {}, "Menu item and image deleted successfully")
    );
});

export {
    addMenuItem,
    getAllMenuItems,
    editMenuItem,
    deleteMenuItem
}

