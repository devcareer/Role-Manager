"use strict";

var express = require('express');

var usersController = require('../controllers/usersController');

var router = express.Router();
router.post('/', usersController.addUser);
module.exports = route;
//# sourceMappingURL=usersRoutes.js.map