const express = require('express');
const playersController = require('../controllers/players.controller');
const playersRoute = new express.Router();

playersRoute.route('/new').post(playersController.createPlayer);

module.exports = playersRoute;
