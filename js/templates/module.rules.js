import createTemplateElement from '../module.template.js';
import back from './components/template.go-back';
import footer from './components/template.footer';
import gameData from '../module.game-data';

const rulesTemplate = document.createDocumentFragment();
const mainTemplate = (game) => (`  
  <header class="header">
    ${back()}
  </header>
  <div class="rules">
    <h1 class="rules__title">${game.rulesData.title}</h1>
    <p class="rules__description">${game.rulesData.text}</p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>
  ${footer()}
`);

rulesTemplate.appendChild(createTemplateElement(mainTemplate(gameData)));

function rulesCtrl(goNext) {
  const keyElement = document.querySelector(`.continue`);
  const input = document.querySelector(`.rules__input`);
  input.required = true;
  input.addEventListener(`input`, function (evt) {
    if (evt.target.value) {
      keyElement.disabled = false;
    } else {
      keyElement.disabled = true;
    }
  });
  keyElement.addEventListener(`click`, function (evt) {
    evt.preventDefault();
    goNext();
  });
}

export {rulesTemplate, rulesCtrl};
