import gameData from './module.game-data';
const SERVER_URL = `https://es.dump.academy/pixel-hunter`;

const status = (response) => {
  if (response.ok) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

const convertIncoming = function(data) {
  return data.map((it) => {
    let screen = {};
    screen.gameType = it.type;
    screen.text = it.question;
    screen.tasks = it.map((item, i) =>{
      let task = {};
      task.image = item.image;
      task.name = `question ` + i;
      task.alt = `Option ` + i;
      task.type = it.type;
    });
  });
};

const saveData = function (data) {
  gameData.gameScreensData = data;
};

const toJSON = (data) => data.json();

export default class Loader {
  static loadData() {
    return fetch(`${SERVER_URL}/questions`).then(status).then(toJSON).then(convertIncoming).then(saveData);
  }
}
