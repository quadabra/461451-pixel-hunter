import AbstractView from "../module.abstract-view";
import back from './components/component.go-back';
import timer from './components/component.timer';
import lives from './components/component.lives';

export default class HeaderView extends AbstractView {
  constructor() {
    super();
  }
  template() {
    return `
  <header class="header">
    ${back()}
    ${timer()}
    ${lives()}
  </header>`;
  }

  bind() {

  }
}
