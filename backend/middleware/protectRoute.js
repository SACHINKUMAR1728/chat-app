import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) return res.status(401).json({ error: "No token provided" });

        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        if (!decoded) return res.status(401).json({ error: "Unauthorized access" });

        const user = await User.findById(decoded.userid).select("-password");

        if (!user) return res.status(404).json({ error: "User not found" });

        req.user = user;

        next();

    } catch (error) {
        console.log("Error in protectRoute: ", error.message)
        res.send(500).json({ error: "Internal server error" });
    }
}

export default protectRoute;