import IntroView from './templates/template.intro';
import GreetingView from './templates/template.greeting';
import RulesView from './templates/template.rules';
import GameScreen from './module.game-engine';
import StatsView from "./templates/template.stats";
import GameModel from './module.game-model';
import Loader from './module.loader';
import ErrorView from './templates/template.error';
import LoadingView from './templates/template.loading';

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
    const loadingView = new LoadingView();
    changeView(loadingView.element);
    Loader.loadData().then(() => this.showIntro()).catch(this.showError);
  }

  static showIntro() {
    const introView = new IntroView();
    introView.onShowGreeting = () => this.showGreeting();
    changeView(introView.element);
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
      Loader.loadStats(name);
      Loader.saveStats(data).then(() => this.showResults(data)).catch(this.showError);
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
