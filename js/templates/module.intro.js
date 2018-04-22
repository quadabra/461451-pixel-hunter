import createTemplateElement from '../module.create-element.js';
import gameData from "../module.game-data";
import renderTemplateElement from "../module.render";
import greetingPage from "./module.greeting";

const introTemplate = (game) => (`
  <div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto">${game.text}</p>
    </div>
  </div>
`);

const introPage = createTemplateElement(introTemplate(gameData.introData));

introPage.querySelector(`.intro__asterisk`).addEventListener(`click`, () => renderTemplateElement(greetingPage));

export default introPage;
