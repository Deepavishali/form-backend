import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    classlevel: {
        type: String,
        required: true
    },
    pricing: {
        type: String,
        required: true
    },
    from: {
        type: Date,
        required: true
    },
    to: {
        type: Date,
        required: true
    },
    modeoflearning: {
        type: String,
        required: true
    },
    classtime: {
        from: {
            type: String,
            required: true
        },
        to: {
            type: String,
            required: true
        }
    },
    description: {
        type: String,
        required: true
    }
});

export default mongoose.model("Form", formSchema);
