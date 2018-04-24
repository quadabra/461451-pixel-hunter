import gameData from "../module.game-data";
import createTemplateElement from "../module.create-element";
import renderTemplateElement from "../module.render";
import rulesPage from "./module.rules";

const greetingTemplate = (game) => (`
<div class="greeting central--blur">
    <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
    <h1 class="greeting__asterisk">*</h1>
    <div class="greeting__challenge">
      <h3>${game.title}</h3>
      <p>${game.text}</p>
    </div>
    <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
  </div>
`);

const greetingPage = createTemplateElement(greetingTemplate(gameData.greetingData));

greetingPage.querySelector(`.greeting__continue`).addEventListener(`click`, () => renderTemplateElement(rulesPage));

export default greetingPage;
