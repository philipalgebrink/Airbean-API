const { UserModel } = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.jwtSecret;

exports.logInUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Find user based on email address
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }

    // Compare the plain-text password with the password in the database
    if (password !== user.password) {
      throw new Error('Invalid password');
    }

    // If password is correct, Create a JWT-token
    const token = jwt.sign({ userId: user._id }, jwtSecret, {
      expiresIn: '1h', // Token utgår om 1 timme
    });

    // Send back JWT-token to client
    res.status(200).json({
      status: 'success',
      id: user._id,
      token,
    });
  } catch (error) {
    // If login failed, catch error
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};
