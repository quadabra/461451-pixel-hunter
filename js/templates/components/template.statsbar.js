export default (state) => (
  `<div class="stats">
    <ul class="stats">
      ${state.getStats().map((it) =>
    `<li class="stats__result stats__result--${it}"></li>`
  ).join(``)}
    </ul>
  </div>`
);
