import mongoose from 'mongoose'

const portfolioSchema = new mongoose.Schema({
    portfolio: {
        type: String,
        required: true
    },
    postedAt: {
        type: Date,
        default: Date.now
    }
})

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,

    },
    documentId: {
        type: String,
        required: true,
        default: "documentId"
    },
    portfolio: {
        type: [portfolioSchema],
        required: true
    },

    isAdmin: {
        type: Boolean,
        default: false,
    }
})
const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;