import AbstractView from '../module.abstract-view';
import backView from './components/component.go-back';
import statsBar from './components/component.statsbar';
import gameState from '../module.game-state';

export default class StatsView extends AbstractView {
  template() {
    return `
  <div class="result">
    <header class="header">
    ${backView()}
    </header>
    <h1>${gameState.result.text}</h1>
    <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
          ${statsBar(gameState)}
        </td>
        <td class="result__points">×&nbsp;100</td>
        <td class="result__total">${gameState.result.answerPoints}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">0&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${gameState.result.speedPoints}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${gameState.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${gameState.result.livesPoints}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">0&nbsp;<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${gameState.result.slowPoints}</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${gameState.result.totalPoints}</td>
      </tr>
    </table>
  </div>`;
  }
}
