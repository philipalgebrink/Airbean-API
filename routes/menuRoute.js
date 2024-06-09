const { createMenuItem } = require('../controllers/createMenuItemController');
const { deleteMenuItem } = require('../controllers/DeleteMenuItemController');
const { getMenu } = require('../controllers/getMenuController');
const { updateMenuItem } = require('../controllers/updateMenuItemController');

const express = require('express');

const router = express.Router();

// Routing for menu

// Public routes
//// Accessible for anyone
router.get('/menu', getMenu);

// Admin interface routes
//// Accessible only through the admin interface
router.post('/admin/menu', createMenuItem);
router.delete('/admin/menu/:itemID', deleteMenuItem);
router.put('/admin/menu/:id', updateMenuItem);


module.exports = router;
