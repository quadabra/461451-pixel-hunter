import gameData from '../module.game-data';
import AbstractView from '../module.abstract-view';
import back from './components/component.go-back';

export default class RulesView extends AbstractView {
  constructor() {
    super();
  }

  template() {
    return `
<header class="header">
    ${back()}
  </header>
  <div class="rules">
    <h1 class="rules__title">${gameData.rulesData.title}</h1>
    <p class="rules__description">${gameData.rulesData.text}</p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>`;
  }

  bind() {
    this.input = this.element.querySelector(`.rules__input`);
    this.submit = this.element.querySelector(`.continue`);

    this.input.addEventListener(`input`, (evt) => {
      this.submit.disabled = (!evt.target.value);
    });

    this.submit.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onStartGame(this.input.value);
    });
    this.back = this.element.querySelector(`.back`);
    this.back.addEventListener(`click`, () => this.onShowGreeting());
    super.bind();
  }
}
