import { bookRepository } from '../../domain/repositories';
const playerArray = [];

function createPlayer(player) {
    playerArray.push(player);
    return player;
}

export const bbddService = {
    createPlayer
};
