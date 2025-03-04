import mongoose from "mongoose";

const VariantSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    imgmain: String,
    imgsecond: String,
    imgthird: String
});

const PostSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true,
        },
        text1: {
            type: String,
            required: true,
        },
        text2: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: false,
            default: 0,
        },
        category: {
            type: Number,
            required: true,
        },
        imgmain: {
            type: String,
            required: false,
        },
        imgsecond: {
            type: String,
            required: false,
        },
        imgthird: {
            type: String,
            required: false,
        },
        isVariant: {
            type: Boolean,
            default: false
        },
        variants: [VariantSchema],
        selectedVariantIndex: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Post", PostSchema);