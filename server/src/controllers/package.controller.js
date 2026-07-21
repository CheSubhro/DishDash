
import { asyncHandler } from '../utils/AsyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import HttpStatus from '../utils/HttpStatus.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { Package } from '../models/package.model.js';
import { logActivity } from "../utils/Logger.js";

const createPackage = asyncHandler(async (req, res) => {
    const { name, eventType, price, items, description } = req.body;

    if (!name || !eventType || price === undefined) {
        throw new ApiError(HttpStatus.BAD_REQUEST, "Name, event type, and price are required");
    }

    const newPackage = await Package.create({
        name: name.trim(),
        eventType: eventType.trim(),
        price,
        items: items || [],
        description: description ? description.trim() : undefined
    });

    await logActivity(
        req.user?._id,
        "CREATE_PACKAGE",
        `New package created: ${newPackage.name}`,
        newPackage._id,
        req.ip
    );

    return res.status(HttpStatus.CREATED).json(
        new ApiResponse(HttpStatus.CREATED, newPackage, "Package created successfully")
    );
});

const getAllPackages = asyncHandler(async (req, res) => {
    const { eventType } = req.query;
    const filter = eventType ? { eventType } : {};

    const packages = await Package.find(filter).sort({ createdAt: -1 });

    return res.status(HttpStatus.OK).json(
        new ApiResponse(HttpStatus.OK, packages, "Packages fetched successfully")
    );
});

const getPackageById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const packageData = await Package.findById(id);
    if (!packageData) {
        throw new ApiError(HttpStatus.NOT_FOUND, "Package not found");
    }

    return res.status(HttpStatus.OK).json(
        new ApiResponse(HttpStatus.OK, packageData, "Package fetched successfully")
    );
});

const updatePackage = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name, eventType, price, items, description } = req.body;

    const packageData = await Package.findById(id);
    if (!packageData) {
        throw new ApiError(HttpStatus.NOT_FOUND, "Package not found");
    }

    if (name) packageData.name = name.trim();
    if (eventType) packageData.eventType = eventType.trim();
    if (price !== undefined) packageData.price = price;
    if (items !== undefined) packageData.items = items;
    if (description !== undefined) packageData.description = description.trim();

    await packageData.save();

    await logActivity(
        req.user?._id,
        "UPDATE_PACKAGE",
        `Package updated: ${packageData.name}`,
        packageData._id,
        req.ip
    );

    return res.status(HttpStatus.OK).json(
        new ApiResponse(HttpStatus.OK, packageData, "Package updated successfully")
    );
});

const deletePackage = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const packageData = await Package.findById(id);
    if (!packageData) {
        throw new ApiError(HttpStatus.NOT_FOUND, "Package not found");
    }

    await Package.findByIdAndDelete(id);

    await logActivity(
        req.user?._id,
        "DELETE_PACKAGE",
        `Package deleted: ${packageData.name}`,
        id,
        req.ip
    );

    return res.status(HttpStatus.OK).json(
        new ApiResponse(HttpStatus.OK, {}, "Package deleted successfully")
    );
});

export {
    createPackage,
    getAllPackages,
    getPackageById,
    updatePackage,
    deletePackage
};