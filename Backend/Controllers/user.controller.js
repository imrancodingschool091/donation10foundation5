import { User } from "../Models/User.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
    try {
        let { username, email, password } = req.body;

        let existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        let hashedPassword = await bcrypt.hash(password, 10);
        let newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({
            message: "User signed up successfully",
            newUser: {
                id: newUser._id,
                username:newUser.username,
                email: newUser.email
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Server error occurred" });
        console.log(`Server Error: ${error}`);
    }
};

export const login = async (req, res) => {
    let { email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        let isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return res.status(401).json({ message: "Email or password does not match" });
        }

        res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        res.status(500).json({ message: "Server error occurred" });
        console.log(`Server Error: ${error}`);
    }
};