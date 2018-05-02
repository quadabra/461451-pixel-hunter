export default (data) => (
  `<div class="stats">
    <ul class="stats">
      ${data.map((it) =>
    `<li class="stats__result stats__result--${it}"></li>`
  ).join(``)}
    </ul>
  </div>`
);
