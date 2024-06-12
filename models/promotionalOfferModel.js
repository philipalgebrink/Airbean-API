const mongoose = require('mongoose');
const { MenuModel } = require('./menuModel');

const promotionalOfferSchema = new mongoose.Schema({
    includedProducts: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'MenuModel',
        required: true,
        validate: {
            validator: async function (products) {
                // Check if each product exists in the MenuModel collection
                //// We require menuModel for this matter
                for (const productId of products) {
                    const productExists = await MenuModel.exists({ _id: productId });
                    if (!productExists) {
                        return false;
                    }
                }
                return true;
            },
            message: 'One or more included products do not exist',
        },
    },
    promotionalPrice: {
        type: Number,
        required: true,
    },
});

const PromotionalOfferModel = mongoose.model('PromotionalOffer', promotionalOfferSchema);

module.exports = PromotionalOfferModel;