import footer from './components/template.footer';

const introTemplate = (game) => (`
  <div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto">${game.text}</p>
    </div>
  </div>
  ${footer()}
`);

function introCtrl(goNext) {
  const keyElement = document.querySelector(`.intro__asterisk`);
  keyElement.addEventListener(`click`, function (evt) {
    evt.preventDefault();
    goNext();
  });
}

const intro = {
  screen(game) {
    return `
  <div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto">${game.text}</p>
    </div>
  </div>
  ${footer()}`
  },
  next()
};

export {introTemplate, introCtrl};
