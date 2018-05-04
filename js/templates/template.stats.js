import AbstractView from '../module.abstract-view';
import Loader from '../module.loader';
import backView from './components/component.go-back';
import statsTable from './components/component.stats-table';

export default class StatsView extends AbstractView {
  constructor(data) {
    super();
    this.stats = data;
    this.oldStats = null;
    this.data = this.getSummary();
  }
  template() {
    return `
  <div class="result">
    <header class="header">
    ${backView()}
    </header>
    ${this.data.map((it, i) => statsTable(it, i + 1))}
  </div>`;
  };

  saveOldStats(data) {
    this.oldStats = data;
  }

  getSummary() {
    Loader.loadStats(this.stats.name).then(this.saveOldStats);
    const allData = [];
    allData.push(this.stats);
    if (this.oldStats) {
      allData.push(...this.oldStats);
    }
    console.log(allData);
    return allData;
  }

  bind() {
    this.back = this.element.querySelector(`.back`);
    this.back.addEventListener(`click`, () => this.onRewind());
    super.bind();
  }
}
