import mongoose from "mongoose";

const ReviewSchema = mongoose.Schema(
    {
        food: { type: mongoose.Types.ObjectId, ref: "foods" },
        restaurant: { type: mongoose.Types.ObjectId, ref: "restaurant" },
        user: { type: mongoose.Types.ObjectId, ref: "user" },
        rating: { type: Number, required: true },
        reviewText: { type: String, required: true },
        isRestaurantReview: Boolean,
        isFoodReview: Boolean,
        photos: {
            type: mongoose.Types.ObjectId,
            ref: "images",
        },
    },
    {
        timestamps: true,
    }
);

export const ReviewModel = mongoose.model("review", ReviewSchema);