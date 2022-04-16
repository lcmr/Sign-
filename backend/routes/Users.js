const express = require('express');
const router = express.Router();
// Cargamos nuestro controlador
const usersController = require('../controllers/users');
// Con el método POST, en el endpoint /signup
// podremos registrar a nuestro usuario
const auth = require("../middleware/auth");
router.post('/signup', usersController.signup);
router.post('/login', usersController.login);
router.post('/update-profile',auth, usersController.updateProfile);
module.exports = router;