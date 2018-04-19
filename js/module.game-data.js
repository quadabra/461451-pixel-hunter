const gameData = {
  'game-1': {
    text: `Угадайте для каждого изображения фото или рисунок?`,
    tasks:
      [
        {
          image: `http://placehold.it/468x458`,
          answers: [
            {
              type: `photo`,
              text: `Фото`,
              go() {
              }
            },
            {
              type: `paint`,
              text: `Рисунок`,
              go() {
              }
            }
          ]
        },
        {
          image: `http://placehold.it/468x458`,
          answers: [
            {
              type: `photo`,
              text: `Фото`,
              go() {
              }
            },
            {
              type: `paint`,
              text: `Рисунок`,
              go() {
              }
            }
          ]
        }
      ]
  },
  'game-2': {
    text: `Угадай, фото или рисунок?`,
    tasks: [
      {
        image: `http://placehold.it/705x455`,
        answers: [
          {
            type: `photo`,
            text: `Фото`,
            go() {
            }
          },
          {
            type: `paint`,
            text: `Рисунок`,
            go() {
            }
          }
        ]
      }
    ]
  },
  'game-3': {
    task: `Найдите рисунок среди изображений`,
    images: [`http://placehold.it/304x455`, `http://placehold.it/304x455`, `http://placehold.it/304x455`],
    answers: [
      {
        type: `photo`,
        text: `Фото`,
        go() {
        }
      },
      {
        type: `paint`,
        text: `Рисунок`,
        go() {
        }
      }
    ]
  }
};

gameData.gameScreensData = [];

gameData.introData = {
  text: `<sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.`,
};

gameData.greetingData = {
  title: `Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!`,
  text: `Правила игры просты.<br>
        Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
        Задача кажется тривиальной, но не думай, что все так просто.<br>
        Фотореализм обманчив и коварен.<br>
        Помни, главное — смотреть очень внимательно.`
};

gameData.rulesData = {
  title: `Правила`,
  text: `Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?`
};

gameData.statsData = {

};

export default gameData;
