import IntroView from './templates/template.intro';
import GreetingView from './templates/template.greeting';
import RulesView from './templates/template.rules';
import GameScreen from './module.game-engine';
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
    rulesView.onStartGame = (name) => this.startGame(name);
    rulesView.onShowGreeting = () => this.showGreeting();
    changeView(rulesView.element);
    this.currentView = rulesView;
  }
  static startGame(name) {
    if (this.currentView) {
      this.currentView.clear();
    }
    this.currentView = null;
    const model = new GameModel(name);
    const gameView = new GameScreen(model);
    gameView.onShowStats = (data) => this.showResults(data);
    gameView.onShowGreeting = () => this.showGreeting();
    changeView(gameView.startLevel());
  }
  static showResults(data) {
    const statsView = new StatsView(data).element;
    changeView(statsView);
    statsView.onShowGreeting = () => this.showGreeting();
    this.currentView = statsView;
  }
}
