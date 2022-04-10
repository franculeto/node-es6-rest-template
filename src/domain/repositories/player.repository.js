const { bbddService } = require('../../infrastructure/httpServices');
const PlayerQueries = require('../queries/player.queries');
class PlayerRepository {
    playersArray = [];
    constructor() {}

    // async createPlayer(player) {
    createPlayer(player) {
        const createCollaboratorQuery = {
            query: new PlayerQueries({}).createCollaborator(player)
        };
        //const response = await bbddService.request(createCollaboratorQuery);
        this.playersArray.push(player);
        return this.playersArray;
    }
}

module.exports = PlayerRepository;
