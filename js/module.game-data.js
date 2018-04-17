export default {
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
