
import { asyncHandler } from '../utils/AsyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import HttpStatus from '../utils/HttpStatus.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import {Category}  from '../models/category.model.js'; 
import { logActivity } from "../utils/Logger.js";

const addCategory = asyncHandler(async (req, res) => {

    const { name, type, parentCategory } = req.body;

    const existingCategory = await Category.findOne({ name: name.trim() });
    if (existingCategory) {
        throw new ApiError(HttpStatus.CONFLICT, "Category with this name already exists");
    }

    const categoryData = {
        name: name.trim(),
        type: type || 'main'
    };

    if (type === 'sub' && parentCategory) {
        categoryData.parentCategory = parentCategory;
    }

    const category = await Category.create(categoryData);

    if (!category) {
        throw new ApiError(HttpStatus.INTERNAL_SERVER_ERROR, "Something went wrong while creating the category");
    }

    await logActivity(
        req.user?._id,
        "ADD_CATEGORY",
        `New category added: ${category.name}`,
        req.user?._id,
        req.ip
    );

    return res.status(HttpStatus.CREATED).json(
        new ApiResponse(HttpStatus.CREATED, category, "Category added successfully")
    );
});

const editCategory = asyncHandler(async (req, res) => {

    const { categoryId } = req.params; 
    const { name, type, parentCategory } = req.body;

    const category = await Category.findById(categoryId);
    if (!category) {
        throw new ApiError(HttpStatus.NOT_FOUND, "Category not found");
    }

    if (name && name.trim() !== category.name) {
        const isNameTaken = await Category.findOne({ name: name.trim() });
        if (isNameTaken) {
            throw new ApiError(HttpStatus.CONFLICT, "Category with this name already exists");
        }
        category.name = name.trim();
    }

    if (type) category.type = type;
    if (parentCategory) category.parentCategory = parentCategory;

    await category.save();

    await logActivity(
        req.user?._id,
        "EDIT_CATEGORY",
        `Category updated: ${category.name}`,
        category._id,
        req.ip
    );

    return res.status(HttpStatus.OK).json(
        new ApiResponse(HttpStatus.OK, category, "Category updated successfully")
    );
});

const getAllCategories = asyncHandler(async (req, res) => {
    const categories = await Category.find().populate("parentCategory", "name type");

    return res
        .status(HttpStatus.OK)
        .json(new ApiResponse(HttpStatus.OK, categories, "Categories fetched successfully"));
});

const deleteCategory = asyncHandler(async (req, res) => {

    const { categoryId } = req.params;

    const category = await Category.findById(categoryId);
    if (!category) {
        throw new ApiError(HttpStatus.NOT_FOUND, "Category not found");
    }

    const isParent = await Category.findOne({ parentCategory: categoryId });
    if (isParent) {
        throw new ApiError(HttpStatus.BAD_REQUEST, "Cannot delete category that has sub-categories");
    }

    await Category.findByIdAndDelete(categoryId);

    await logActivity(
        req.user?._id,
        "DELETE_CATEGORY",
        `Category deleted: ${category.name}`,
        categoryId,
        req.ip
    );

    return res.status(HttpStatus.OK).json(
        new ApiResponse(HttpStatus.OK, {}, "Category deleted successfully")
    );
});

export { 
    addCategory, 
    editCategory,
    getAllCategories,
    deleteCategory
};