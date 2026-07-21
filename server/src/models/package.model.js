
import mongoose, { Schema } from "mongoose";

// Define the schema for the package
const packageSchema = new Schema(
    {
        // Package name (e.g., Package A, Package 1)
        name: {
            type: String,
            required: [true, 'Package name is required'],
            trim: true,
            index: true // Searching by name will be faster
        },
        // Event type (e.g., Griha Prabesh, Annaprashan, Wedding)
        eventType: {
            type: String,
            required: [true, 'Event type is required'],
            trim: true
        },
        // Package price (e.g., 190, 670)
        price: {
            type: Number,
            required: [true, 'Package price is required']
        },
        // List of items included in the package
        items: [{
            itemName: { 
                type: String, 
                required: true,
                trim: true
            },
            price: { 
                type: Number, 
                required: true 
            }
        }],
        // Optional description for the package
        description: {
            type: String,
            trim: true
        }
    },
    // Additional options
    {
        timestamps: true // Adds createdAt and updatedAt fields
    }
);

// Create and export the Package model
export const Package = mongoose.model("Package", packageSchema);