import createTemplateElement from '../module.template';
import footer from './components/template.footer';
import gameData from '../module.game-data';

const greetingTemplate = document.createDocumentFragment();

const mainTemplate = (game) => (`
<div class="greeting central--blur">
    <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
    <h1 class="greeting__asterisk">*</h1>
    <div class="greeting__challenge">
      <h3>${game.greetingData.title}</h3>
      <p>${game.greetingData.text}</p>
    </div>
    <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
  </div>
  ${footer()}
`);

greetingTemplate.appendChild(createTemplateElement(mainTemplate(gameData)));

function greetingCtrl(goNext) {
  const keyElement = document.querySelector(`.greeting__continue`);
  keyElement.addEventListener(`click`, function (evt) {
    evt.preventDefault();
    goNext();
  });
}

export {greetingTemplate, greetingCtrl};
