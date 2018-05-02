import AbstractView from "../module.abstract-view";
import back from './components/component.go-back';
import timer from './components/component.timer';
import lives from './components/component.lives';

export default class HeaderView extends AbstractView {
  constructor(model, callback) {
    super();
    this.model = model;
    this.back = back();
    this.timer = timer(this.model.timer);
    this.lives = lives(this.model.lives);
    this.callback = callback;
  }
  template() {
    return `
  <header class="header">
    ${this.header().join(``)}
  </header>`;
  }

  header() {
    let headerContent = [];
    headerContent.push(this.back);
    if (this.model.timer) { headerContent.push(this.timer)}
    if (this.model.lives) { headerContent.push(this.lives)}
    return headerContent;
  }

  bind() {
    this.actionElements = this.element.querySelectorAll(`.back`);
    super.bind();
  }
}
