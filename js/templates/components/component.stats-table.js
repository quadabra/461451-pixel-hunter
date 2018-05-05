import gameData from '../../module.game-data';
import statsBar from './component.statsbar';

export default (data, number) => (`
  <h1>${data.text}</h1>
  <table class="result__table">
  <tr>
  <td class="result__number">${number}.</td>
  <td colspan="2">
  ${statsBar(data.stats)}
  </td>
  <td class="result__points">×&nbsp;100</td>
<td class="result__total">${data.answerPoints}</td>
  </tr>
  <tr>
  <td></td>
  <td class="result__extra">Бонус за скорость:</td>
<td class="result__extra">${data.speedPoints / gameData.answerPrices.FAST}&nbsp;<span class="stats__result stats__result--fast"></span></td>
<td class="result__points">×&nbsp;50</td>
<td class="result__total">${data.speedPoints}</td>
  </tr>
  <tr>
  <td></td>
  <td class="result__extra">Бонус за жизни:</td>
<td class="result__extra">${data.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
<td class="result__points">×&nbsp;50</td>
<td class="result__total">${data.livesPoints}</td>
  </tr>
  <tr>
  <td></td>
  <td class="result__extra">Штраф за медлительность:</td>
<td class="result__extra">${data.slowPoints / gameData.answerPrices.SLOW}&nbsp;<span class="stats__result stats__result--slow"></span></td>
<td class="result__points">×&nbsp;50</td>
<td class="result__total">${data.slowPoints}</td>
</tr>
<tr>
<td colspan="5" class="result__total  result__total--final">${data.totalPoints}</td>
  </tr>
  </table>`
);
