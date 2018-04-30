import AbstractView from '../../module.abstract-view';
import BackView from './component.go-back';
import TimerView from './component.timer';
import LivesView from './component.lives';

export default class GameHeaderView extends AbstractView {
  constructor() {
    super();
  }

  template() {
    return `<header class="header">
    ${new BackView().element}
    ${new TimerView().element}
    ${new LivesView().element}
    </header>`;
  }
}
