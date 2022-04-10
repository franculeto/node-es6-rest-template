const express = require('express');
const playersRoutes = require('./players.routes');

const router = new express.Router();

router.use('/players', playersRoutes);

module.exports = router;
