import mongoose from "mongoose";

const MenuSchema = new mongoose.Schenma({
    menus: [
        {
            name: { type: String, required: true },
            items: [
                {
                    type: mongoose.Types.ObjectId,
                    ref: "foods",
                },
            ],
        },
    ],
    recommended: [
        {
            type: mongoose.Types.ObjectId,
            ref: "foods",
            unique: true,
        },
    ],
}, {
    timestamps: true,
})

export const MenuModel = mongoose.model("menu", MenuSchema)