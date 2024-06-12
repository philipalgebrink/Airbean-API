const { MenuModel } = require('../models/menuModel');
const PromotionalOfferModel = require('../models/promotionalOfferModel');

exports.createPromotionalOffer = async (req, res, next) => {
    try {

        const { includedProducts, promotionalPrice } = req.body;

        // Validate the included products before creating the offer
        for (const productId of includedProducts) {
            const productExists = await MenuModel.exists({ _id: productId });
            if (!productExists) {
                return res.status(400).json({
                    status: 'fail',
                    message: `Product with ID ${productId} does not exist`,
                });
            }
        }

        // Create a new promotional offer
        const newPromotionalOffer = new PromotionalOfferModel({
            includedProducts,
            promotionalPrice,
        });

        const savedOffer = await newPromotionalOffer.save();

        res.status(201).json({
            status: 'success',
            message: 'Promotional offer created successfully',
            data: savedOffer,
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message,
        });
    }
};