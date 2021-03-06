import actionView from './components/component.action';
import statsBar from './components/component.statsbar';
import AbstractView from "../module.abstract-view";

export default class SecondGameType extends AbstractView {
  template() {
    return `
 <div class="game">
    <p class="game__task">${this.data.text}</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${this.data.tasks[0].image}" alt="Option 1" width="705" height="455">
       ${actionView(this.data.tasks[0])}
      </div>
    </form>
    ${statsBar(this.data.state)}
  </div>`;
  }
  bind() {
    this.actionElement = this.element.querySelector(`.game__content`);
    this.actionElement.addEventListener(`change`, (evt) => {
      const answer0 = [...evt.target.form.elements.question1].find((control) => control.checked);
      if (answer0) {
        this.onAnswer(answer0.value);
      }
    });
    super.bind();
  }
}
