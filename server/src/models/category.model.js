
import mongoose, { Schema } from "mongoose";

// Define the schema for the category
const categorySchema = new Schema(
    {
        // Category name
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            index: true // Searching by name will be faster
        },
        // Category type (main or sub)
        type: {
            type: String,
            enum: ['main', 'sub'],
            default: 'main'
        },
        // Reference to the parent category (if type is 'sub')
        parentCategory: {
            type: Schema.Types.ObjectId,
            ref: "Category"
        }
    },
    // Additional options
    {
        timestamps: true // Adds createdAt and updatedAt fields
    }
);

// Create and export the Category model
export const Category = mongoose.model("Category", categorySchema);