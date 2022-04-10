class PlayersQueries {
    constructor() {}

    createCollaborator(player) {
        return `mutation {
            createPlayer(
              name: "${player.name}"
              lastname: "${player.lastname}"
              cellphone: "${player.cellphone}"
              mail: "${player.mail}"
              }),
              {
                code
                message
                success
              }
          }`;
    }
}

module.exports = PlayersQueries;
