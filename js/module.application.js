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
    this.currentView = loadingView;
    Loader.loadData().then(Application.showIntro()).catch(Application.showError);
  }

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
    this.currentView.clear();
    const model = new GameModel(name);
    const gameView = new GameScreen(model);
    gameView.onShowStats = (data) => this.showResults(data);
    gameView.onShowGreeting = () => this.showGreeting();
    changeView(gameView.startLevel());
    this.currentView = gameView;
  }
  static showResults(data) {
    const statsView = new StatsView(data);
    statsView.onRewind = () => this.showGreeting();
    changeView(statsView.element);
    this.currentView = statsView;
  }
}
