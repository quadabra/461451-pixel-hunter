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
    ${new BackView().template()}
    ${new TimerView().template()}
    ${new LivesView().template()}
    </header>`;
  }
}
