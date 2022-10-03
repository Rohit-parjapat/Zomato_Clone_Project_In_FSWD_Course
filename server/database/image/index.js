import mongoose from "mongoose";

const ImageSchema = new mongoose.Schenma({
    images: [
        {
            Location: { type: string, required: true },
        },
    ],
}, {
    timestamps: true
})

export const ImageModel = mongoose.model("image", ImageSchema)