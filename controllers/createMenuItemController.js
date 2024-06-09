const { MenuModel } = require('../models/menuModel');

// Create new item on menu
exports.createMenuItem = async (req, res, next) => {
  try {

    const { title, description, price, image } = req.body;

    if (!title || !description || !price) {
      return res.status(400).json({
        status: 'fail',
        message: 'All fields are required (title, description, price).',
      });
    }

    const newMenuItem = await MenuModel.create({ title, description, price, image });


    res.status(201).json({
      status: 'success',
      message: 'New item successfully created',
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: e.message,
    });
  }
};
