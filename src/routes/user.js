const express = require('express');
const UserController = require('../controllers/user');

const router = express.Router();

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/:userId', UserController.getUser);
router.put('/:userId', UserController.updateUser);
router.delete('/:userId', UserController.deleteUser);

module.exports = router;


/*
This user.js route file defines the different routes for a User. The express library is used to create the router and handle HTTP requests.
 The route handler functions are defined in the UserController file, which is imported into this file. 
 This file exports the router, which can be used in the main app.js file to handle User-related requests.*/