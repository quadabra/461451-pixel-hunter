import {createTemplateElement} from '../js/module.template.js';

const game1Template = document.createDocumentFragment();
const data = {
  timer: `NN`,
  lives: 1,
  stats: [`wrong`, `slow`, `fast`, `correct`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`]
};

const headerTemplate = (state) => (`
   <header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>
    <h1 class="game__timer">${state.timer}</h1>
    <div class="game__lives">
    ${new Array(3 - state.lives)
    .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
    .join(``)}
    ${new Array(state.lives)
    .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
    .join(``)}
    </div>
  </header>`
);

game1Template.appendChild(createTemplateElement(headerTemplate(data)));

const game = {
  task: `Угадайте для каждого изображения фото или рисунок?`,
  images: [],
  answers: []
};

const mainTemplate = (game) => (`
  <div class="game">
    <p class="game__task">${game.task}</p>
    <form class="game__content">
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
  </div>`
);

game1Template.appendChild(createTemplateElement(mainTemplate(game)));

const stats = (state) => (
  `<div class="stats">
      <ul class="stats">
      ${state.stats.map((it) => {
        return `<li class="stats__result stats__result--${it}"></li>`}).join(``)}
      </ul>
    </div>`
);

game1Template.appendChild(createTemplateElement(stats(data)));

const footer = (
  `<footer class="footer">
  <a href="https://htmlacademy.ru" class="social-link social-link--academy">HTML Academy</a>
  <span class="footer__made-in">Сделано в <a href="https://htmlacademy.ru" class="footer__link">HTML Academy</a> &copy; 2016</span>
  <div class="footer__social-links">
  <a href="https://twitter.com/htmlacademy_ru" class="social-link  social-link--tw">Твиттер</a>
  <a href="https://www.instagram.com/htmlacademy/" class="social-link  social-link--ins">Инстаграм</a>
  <a href="https://www.facebook.com/htmlacademy" class="social-link  social-link--fb">Фэйсбук</a>
  <a href="https://vk.com/htmlacademy" class="social-link  social-link--vk">Вконтакте</a>
  </div>
  </footer>`
);

game1Template.appendChild(createTemplateElement(footer));

function game1Ctrl(goNext) {
  document.forms[0].addEventListener(`change`, function () {
    if (document.forms[0].elements.question1.value && document.forms[0].elements.question2.value) {
      goNext();
    }
  });
}

export {game1Template, game1Ctrl};
