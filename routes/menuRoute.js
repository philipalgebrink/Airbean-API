const { createMenuItem } = require('../controllers/createMenuItemController');
const { createPromotionalOffer } = require('../controllers/createPromotionalOfferController');
const { deleteMenuItem } = require('../controllers/deleteMenuItemController');
const { getMenu } = require('../controllers/getMenuController');
const { updateMenuItem } = require('../controllers/updateMenuItemController');
const { requireAdmin } = require('../middleware/authMiddleware');
const express = require('express');

const router = express.Router();

// Public routes
router.get('/menu', getMenu);

// Admin interface routes
router.post('/admin/menu', requireAdmin, createMenuItem);
router.post('/promotional-offers', requireAdmin, createPromotionalOffer)
router.delete('/admin/menu/:itemID', requireAdmin, deleteMenuItem);
router.put('/admin/menu/:id', requireAdmin, updateMenuItem);

module.exports = router;