import statsBar from './components/component.statsbar';
import AbstractView from '../module.abstract-view';

export default class ThirdGameType extends AbstractView {
  template() {
    return `
  <div class="game">
    <p class="game__task">${this.data.text}</p>
    <form class="game__content  game__content--triple">
    ${this.data.tasks.map((it) => `<div class="game__option">
        <img src="${it.image}" alt="${it.alt}" width="304" height="455">
      </div>`).join(``)}
    </form>
    ${statsBar(this.data.state)}`;
  }
  bind() {
    this.actionElement = this.element.querySelector(`.game__content`);
    this.images = this.element.querySelectorAll(`.game__option`);
    this.actionElement.addEventListener(`click`, (evt) => {
      for (let i = 0; i < this.images.length; i++) {
        if (evt.target === this.images[i]) {
          this.onAnswer(i);
        }
      }
    });
    super.bind();
  }
}
