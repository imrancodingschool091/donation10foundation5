import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        // minLength: [3, "Username should contain at least 3 characters!"],
        // maxLength: [20, "Username can't exceed 20 characters!"]
    },
    email: {
        type: String,
        required: true,
        unique: true // Assuming email should be unique for each user
    },
    password: {
        type: String,
        required: true,
    //     minLength: [8, "Password should contain at least 8 characters!"],
    //     maxLength: [20, "Password can't exceed 20 characters!"]
    // }
    }
});

export const User = mongoose.model("User", userSchema);