import IntroView from './templates/template.intro';
import GreetingView from './templates/template.greeting';
import RulesView from './templates/template.rules';
import GameView from './module.game-engine';
import StatsView from "./templates/template.stats";
import GameModel from './module.game-model';

const main = document.querySelector(`.central`);

const changeView = (view) => {
  main.innerHTML = ``;
  main.appendChild(view);
};

export default class Application {
  static showIntro() {
    const introView = new IntroView();
    introView.onShowGreeting = () => this.showGreeting();
    changeView(introView.element);
    this.currentView = introView;
  }
  static showGreeting() {
    const greetingView = new GreetingView();
    greetingView.onShowRules = () => this.showRules();
    changeView(greetingView.element);
    this.currentView = greetingView;
  }
  static showRules() {
    const rulesView = new RulesView();
    rulesView.onStartGame = () => this.startGame();
    changeView(rulesView.element);
    this.currentView = rulesView;
  }
  static startGame() {
    if (this.currentView) {
      this.currentView.clear();
    }
    this.currentView = null;
    const gameView = new GameView();
    gameView.showNextLvl = () => this.startGame();
    gameView.showStats = () => this.showResults();
    changeView(new GameView().startLevel());
  }
  static showResults() {
    changeView(new StatsView().element);
  }
}
