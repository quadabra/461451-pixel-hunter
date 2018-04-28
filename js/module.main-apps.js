import IntroView from './templates/template.intro';
import GreetingView from './templates/template.greeting';
import RulesView from './templates/template.rules';
import GameView from './module.game-engine';

const main = document.querySelector(`.central`);

const changeView = (view) => {
  main.innerHTML = '';
  main.appendChild(view);
};

export default class Application {
  static showIntro() {
    this.currentView = new IntroView();
    changeView(this.currentView.element);
  }
  static showGreeting() {
    this.currentView.clear();
    this.currentView = new GreetingView();
    changeView(this.currentView.element);
  }
  static showRules() {
    this.currentView.clear();
    this.currentView = new RulesView();
    changeView(this.currentView.element);
  }
  static startGame() {
    if(this.currentView) {
      this.currentView.clear();
    }
    this.currentView = null;
    changeView(new GameView().startLevel());
  }
  static showResults() {
    changeView(createResults());
  }
}
