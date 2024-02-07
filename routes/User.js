const express = require('express');
const router = express.Router();
const User = require('../models/User');
const  userControllers=require('../controllers/userControllers');

router.route('/user')
    .get(userControllers.getAllUsers)
    .post(userControllers.postNewUser);

router.route('/user/:id')
    .put(userControllers.updateUser)
    .delete(userControllers.deleteUser);

module.exports= router;