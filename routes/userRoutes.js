const express = require('express');
const { loginController, registerController, authController } = require('../controller/userCtrl');
const authmiddleware = require('../middleware/authmiddleware');

const routes = express.Router();
// Add routes
//login
routes.post('/login', loginController);
//register
routes.post('/register', registerController);
// auth
routes.post('/getUserData',authmiddleware,authController)


module.exports = routes;
