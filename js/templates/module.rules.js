
import back from './components/template.go-back';
import footer from './components/template.footer';

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
  ${footer()}
`);

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
