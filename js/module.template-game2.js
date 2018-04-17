export default (game) => (`
  <div class="game">
    <p class="game__task">${game.text}</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${game.tasks[0].image}" alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--${game.tasks[0].answers[0].type}">
          <input name="question1" type="radio" value="${game.tasks[0].answers[0].type}">
          <span>${game.tasks[0].answers[0].text}</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--${game.tasks[0].answers[1].type}">
          <input name="question1" type="radio" value="${game.tasks[0].answers[1].type}">
          <span>${game.tasks[0].answers[1].text}</span>
        </label>
      </div>
    </form>
`);
