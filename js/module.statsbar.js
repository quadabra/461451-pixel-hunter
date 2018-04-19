export default (state) => (
  `<div class="stats">
    <ul class="stats">
      ${state.stats.map((it) =>
    `<li class="stats__result stats__result--${it}"></li>`
  ).join(``)}
    </ul>
  </div>`
);
