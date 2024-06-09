const { createMenuItem } = require('../controllers/createMenuItemController');
const { deleteMenuItem } = require('../controllers/DeleteMenuItemController');
const { getMenu } = require('../controllers/getMenuController');
const { updateMenuItem } = require('../controllers/updateMenuItemController');
const { logInUser } = require('../controllers/logInController');
const { requireAdmin } = require('../middleware/authMiddleware');

const express = require('express');

const router = express.Router();

// Routing for menu

// Public routes
//// Accessible for anyone
router.post('/login', logInUser);
router.get('/menu', getMenu);

// Admin interface routes
//// Accessible only through the admin interface
router.post('/admin/menu', requireAdmin, createMenuItem);
router.delete('/admin/menu/:itemID', requireAdmin, deleteMenuItem);
router.put('/admin/menu/:id', requireAdmin, updateMenuItem);


module.exports = router;
