const { playerRepository } = require('../../domain/repositories');

async function createPlayer(req, res, next) {
    const player = req.body;
    const resp = await playerRepository.createPlayer(player);
    res.json(resp);
}

module.exports = { createPlayer };
