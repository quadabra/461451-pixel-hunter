import IntroView from './templates/template.intro';
import GreetingView from './templates/template.greeting';
import RulesView from './templates/template.rules';
import GameScreen from './module.game-engine';
import StatsView from "./templates/template.stats";
import GameModel from './module.game-model';
import Loader from './module.loader';
import ErrorView from './templates/template.error';

const main = document.querySelector(`.central`);

const changeView = (view) => {
  main.innerHTML = ``;
  main.appendChild(view);
};

export default class Application {
  static showError(error) {
    const errorView = new ErrorView(error);
    changeView(errorView.element);
  }

  static start() {
    const introView = new IntroView();
    changeView(introView.element);
    Loader.loadData().catch(this.showError);
    introView.onShowGreeting = () => this.showGreeting();
  }

  static showGreeting() {
    const greetingView = new GreetingView();
    greetingView.onShowRules = () => this.showRules();
    changeView(greetingView.element);
  }
  static showRules() {
    const rulesView = new RulesView();
    rulesView.onStartGame = (name) => this.startGame(name);
    rulesView.onShowGreeting = () => this.showGreeting();
    changeView(rulesView.element);
  }
  static startGame(name) {
    const model = new GameModel(name);
    const gameView = new GameScreen(model);
    gameView.onShowStats = (data) => {
      Loader.saveStats(data).then(() => this.showResults(data)).catch(this.showError);
      Loader.loadStats(name);
    };
    gameView.onShowGreeting = () => this.showGreeting();
    changeView(gameView.startLevel());
  }
  static showResults(data) {
    const statsView = new StatsView(data);
    statsView.onRewind = () => this.showGreeting();
    changeView(statsView.element);
  }
}
