import gameData from '../module.game-data';
import AbstractView from '../module.abstract-view';
import Loader from '../module.loader';
import backView from './components/component.go-back';
import statsTable from './components/component.stats-table';

export default class StatsView extends AbstractView {
  constructor(data) {
    super();
    this.stats = data;
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

  getSummary() {
    const oldData = Loader.loadStats();
    const allData = [];
    allData.push(this.stats);
    oldData.forEach((it) => {
      allData.push(it);
    });
    console.log(oldData);
    console.log(allData);
    return allData;
  }

  bind() {
    this.back = this.element.querySelector(`.back`);
    this.back.addEventListener(`click`, () => this.onRewind());
    super.bind();
  }
}
