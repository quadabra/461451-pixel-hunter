import actionView from './components/component.action';
import statsBar from './components/component.statsbar';
import AbstractView from '../module.abstract-view';

export default class FirstGameType extends AbstractView {
  template() {
    return `
  <div class="game">
    <p class="game__task">${this.data.text}</p>
    <form class="game__content">
    ${this.data.tasks.map((it) =>
    `<div class="game__option">
        <img src="${it.image}" alt="${it.alt}" width="468" height="458">
        ${actionView(it)}
      </div>`).join(``)}
    </form>
    ${statsBar(this.data.state)}
  </div>`;
  }
  bind() {
    this.actionElement = this.element.querySelector(`.game__content`);
    this.actionElement.addEventListener(`click`, () => {
      const answer0 = document.forms[0].elements.question1.value;
      const answer1 = document.forms[0].elements.question2.value;
      if (answer0 && answer1) {
        this.onAnswer(answer0, answer1);
      }
    });
    super.bind();
  }
}

