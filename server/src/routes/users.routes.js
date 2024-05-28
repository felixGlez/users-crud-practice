const usersController = require('../controllers/users.controller');

const express = require('express');
const usersRoutes = express.Router();

usersRoutes.get('/', usersController.getAllUsers);
usersRoutes.post('/', usersController.createUser);
usersRoutes.patch('/:id', usersController.updateUser);
usersRoutes.delete('/:id', usersController.deleteUser);

module.exports = usersRoutes;
