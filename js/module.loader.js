import gameData from './module.game-data';
const SERVER_URL = `https://es.dump.academy/pixel-hunter`;
const APP_ID = `461451`;

const status = (response) => {
  if (response.ok) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

const convertIncoming = function (data) {
  return data.map((it) => {
    const screen = {};
    screen.gameType = it.type;
    screen.text = it.question;
    screen.tasks = it.answers.map((item, i) =>{
      const task = {};
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

const saveStatsData = function (data) {
  gameData.gameOldStats = data;
};

const toJSON = (data) => data.json();

export default class Loader {
  static loadData() {
    return fetch(`${SERVER_URL}/questions`).
        then(status).
        then(toJSON).
        then(convertIncoming).
        then(saveData);
  }
  static saveStats(data) {
    const settings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };
    return fetch(`${SERVER_URL}/stats/:${APP_ID}-:${data.name}`, settings).then(status);
  }
  static loadStats(name) {
    gameData.gameOldStats = [];
    return fetch(`https://es.dump.academy/pixel-hunter/stats/:${APP_ID}-:${name}`).
        then(status).
        then(toJSON).
        then(saveStatsData).
        catch(() => {console.log(`новый игрок`)});
  }
}
