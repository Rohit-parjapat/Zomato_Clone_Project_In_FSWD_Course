import mongoose from "mongoose";

const FoodSchema = new mongoose.Schenma({
    name: { type: string, required: true },
    descript: { type: string, required: true },
    isVeg: { type: Boolean, required: true },
    isContainEgg: { type: Boolean, required: true },
    category: { type: string, required: true },
    photos: {
        type: mongoose.Type.ObjectId,
        ref: "images",
    },
    price: { type: Number, default: 150, required: true },
    addOns: [
        {
            type: mongoose.Type.ObjectId,
            ref: "foods",
        }
    ],
    restaurant: {
        type: mongoose.Type.ObjectId,
        ref: "restaurant",
        required: true,
    },
}, {
    timestamps: true
})

export const FoodModel = mongoose.model("food", FoodSchema)