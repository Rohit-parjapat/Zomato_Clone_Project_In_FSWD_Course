import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema(
  {
    images: [
      {
        src: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const ImageModel = mongoose.model("image", ImageSchema);
