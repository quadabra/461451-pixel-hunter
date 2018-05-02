import AbstractView from '../module.abstract-view';
import backView from './components/component.go-back';
import statsBar from './components/component.statsbar';


export default class StatsView extends AbstractView {
  template() {
    return `
  <div class="result">
    <header class="header">
    ${backView()}
    </header>
    <h1>${this.data.text}</h1>
    <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
          ${statsBar(this.data.stats)}
        </td>
        <td class="result__points">×&nbsp;100</td>
        <td class="result__total">${this.data.answerPoints}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">0&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${this.data.speedPoints}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${this.data.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${this.data.livesPoints}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">0&nbsp;<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${this.data.slowPoints}</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${this.data.totalPoints}</td>
      </tr>
    </table>
  </div>`;
  }
  bind() {
    this.back = this.element.querySelector(`.back`);
    this.back.addEventListener(`click`, () => this.onShowGreeting());
    super.bind();
  }
}
