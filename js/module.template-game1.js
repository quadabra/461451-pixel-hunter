export default (game) => (`
  <div class="game">
    <p class="game__task">${game.text}</p>
    <form class="game__content">
    ${game.tasks.map((it, index) =>
    `<div class="game__option">
        <img src="${it.image}" alt="Option ${index + 1}" width="468" height="458">
        ${[...it.answers].map((answer) =>
      `<label class="game__answer game__answer--${answer.type}">
          <input name="question${index + 1}" type="radio" value="${answer.type}">
          <span>${answer.text}</span>
        </label>`
    ).join(``)}
      </div>`
  ).join(``)}
    </form>
  </div>`
);
