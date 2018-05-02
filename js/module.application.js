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
    rulesView.onStartGame = () => this.startGame();
    rulesView.onShowGreeting = () => this.showGreeting();
    changeView(rulesView.element);
    this.currentView = rulesView;
  }
  static startGame() {
    if (this.currentView) {
      this.currentView.clear();
    }
    this.currentView = null;
    const playerName = `zzz`;
    const model = new GameModel(playerName);
    const gameView = new GameScreen(model);
    gameView.showNextLvl = () => this.startGame();
    gameView.showStats = () => this.showResults();
    changeView(gameView.startLevel());
  }
  static showResults(data) {
    const statsView = new StatsView(data).element;
    changeView(statsView);
    statsView.onShowGreeting = () => this.showGreeting();
    this.currentView = statsView;
  }
}
