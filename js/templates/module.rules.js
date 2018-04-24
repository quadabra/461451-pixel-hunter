import createTemplateElement from "../module.create-element";
import back from './components/template.go-back';
import gameData from "../module.game-data";
import gameStart from "../module.game-engine";

const rulesTemplate = (game) => (`  
  <header class="header">
    ${back()}
  </header>
  <div class="rules">
    <h1 class="rules__title">${game.title}</h1>
    <p class="rules__description">${game.text}</p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>
`);

const rulesPage = createTemplateElement(rulesTemplate(gameData.rulesData));

const input = rulesPage.querySelector(`.rules__input`);
const submit = rulesPage.querySelector(`.continue`);

input.addEventListener(`input`, (evt) => {
  submit.disabled = (!evt.target.value);
});
submit.addEventListener(`click`, () => gameStart());

export default rulesPage;
