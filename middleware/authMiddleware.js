const jwt = require('jsonwebtoken');
const { UserModel } = require('../models/userModel');

exports.requireAdmin = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: 'Authorization token is missing' });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Authorization token is missing' });
    }

    try {
        // Verify JWT token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find user by userId
        const user = await UserModel.findById(decoded.userId);
        if (!user) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        // Check if user has admin role
        if (user.role !== 'admin') {
            return res.status(403).json({ message: 'Unauthorized: Admin role required' });
        }

        req.user = user; // Attach user to request object
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};
