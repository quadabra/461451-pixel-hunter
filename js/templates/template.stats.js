import gameData from '../module.game-data';
import AbstractView from '../module.abstract-view';
import backView from './components/component.go-back';
import statsTable from './components/component.stats-table';

export default class StatsView extends AbstractView {
  constructor(data) {
    super();
    this.stats = data;
    this.oldStats = gameData.gameOldStats;
    this.data = this.getSummary();
  }
  template() {
    return `
  <div class="result">
    <header class="header">
    ${backView()}
    </header>
    ${this.data.map((it, i) => statsTable(it, i + 1)).join(``)}
  </div>`;
  }

  getSummary() {
    const allData = [];
    allData.push(this.stats);
    this.oldStats.reverse().map((it) => {
      allData.push(it);
    });
    return allData;
  }

  bind() {
    this.back = this.element.querySelector(`.back`);
    this.back.addEventListener(`click`, () => this.onRewind());
    super.bind();
  }
}
