export default (game) =>(`
  <div class="game">
    <p class="game__task">${game.task}</p>
    <form class="game__content  game__content--triple">
    ${game.images.map((it, i) => `<div class="game__option">
        <img src="${it}" alt="Option ${i}" width="304" height="455">
      </div>`).join(``)}
    </form>
`);
