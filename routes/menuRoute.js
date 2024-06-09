const { createMenuItem } = require('../controllers/createMenuItemController');
const { deleteMenuItem } = require('../controllers/DeleteMenuItemController');
const { getMenu } = require('../controllers/getMenuController');
const express = require('express');

const router = express.Router();

// Routing for menu

router.get('/menu', getMenu);
router.post('/menu', createMenuItem);
router.delete('/menu/:itemID', deleteMenuItem);

router.post('/admin/menu', createMenuItem);

module.exports = router;
