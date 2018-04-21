import gameData from './module.game-data';

const state = {
  gameData: gameData,
  init: {
    answers: new Array(10).fill(`unknown`),
    lives: 3
  },
  timer: `NN`,
  lives: 3,
  stats: [`wrong`, `slow`, `fast`, `correct`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`],
};

const zz = {
  TEST_MUTATION: function (state, payload) {
    state.lives++;
  },
  ANSWER_TWO_IMAGES(state, payload) {
    state.gameData.gameScreensData
  },
};

function mutate(name, payload) {
  zz[name](state, payload)
}

export default state;
export {mutate};
