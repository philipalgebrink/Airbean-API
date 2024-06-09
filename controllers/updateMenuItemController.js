const { MenuModel } = require('../models/menuModel');

exports.updateMenuItem = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, description, price, image } = req.body;

        // Check if the menu item exists
        const menuItem = await MenuModel.findById(id);
        if (!menuItem) {
            return res.status(404).json({
                status: 'fail',
                message: 'Menu item not found',
            });
        }

        // Update the menu item fields
        menuItem.title = title;
        menuItem.description = description;
        menuItem.price = price;
        menuItem.image = image;
        menuItem.modifiedAt = new Date(); // Update modifiedAt timestamp

        // Save the updated menu item
        await menuItem.save();

        res.status(200).json({
            status: 'success',
            message: 'Menu item updated successfully',
            data: menuItem,
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message,
        });
    }
};