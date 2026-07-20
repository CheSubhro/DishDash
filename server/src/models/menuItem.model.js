
import mongoose, { Schema } from "mongoose";

const menuItemSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Item name is required"],
            trim: true,
            index: true
        },
        description: {
            type: String,
            trim: true
        },
        price: {
            type: Number,
            required: [true, "Price is required"]
        },
        image: {
            type: String, // Cloudinary URL
            default: ""
        },
        isAvailable: {
            type: Boolean,
            default: true
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: "Category",
            required: [true, "Category is required"]
        }
    },
    {
        timestamps: true
    }
);

export const MenuItem = mongoose.model("MenuItem", menuItemSchema);