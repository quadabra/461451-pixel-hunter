import gameData from './module.game-data';

const state = {
  gameData: gameData,
  init: {
    gameScreen: 0,
    answers: [],
    lives: 3
  },
  timer: `NN`,
  lives: 3,
  stats: [`wrong`, `slow`, `fast`, `correct`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`],
};

const saveAnswer = (answer) => {

};

const twoImages = (answers, data, callback) => {
  const answer = (answers[0] === data.tasks[0].type && answers[1] === data.tasks[1].type);
  callback(answer);
};
const oneImage = () => {};
const findImage = () => {};

getAnswer = new Set([twoImages, oneImage, findImage]);

export default state;
export {getAnswer};
