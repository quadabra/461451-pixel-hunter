import gameData from './module.game-data';
const SERVER_URL = `https://es.dump.academy/pixel-hunter`;

const status = (response) => {
  if (response.ok) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

const convertIncoming = function (data) {
  return data.map((it) => {
    let screen = {};
    screen.gameType = it.type;
    screen.text = it.question;
    screen.tasks = it.answers.map((item, i) =>{
      let task = {};
      task.image = item.image.url;
      task.name = `question` + (i + 1);
      task.alt = `Option ` + (i + 1);
      task.type = item.type;
      return task;
    });
    return screen;
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
