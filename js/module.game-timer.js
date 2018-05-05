const timerBlinkColors = {
  red: `color: red`,
  black: `color: black`
};

const WARNING_TIME = 5;

export default class Timer {
  constructor() {
    this.currentTime = null;
    this.callback = null;
    this.timeoutId = null;
    this.container = null;
  }

  configure(sec, container, callback) {
    this.currentTime = sec;
    this.container = container;
    this.callback = callback;
    return this;
  }

  getTime() {
    return this.currentTime;
  }

  start() {
    const _tick = () => {
      this.container.innerHTML = this.currentTime;
      this.currentTime--;
      this.container.style = (this.currentTime < WARNING_TIME && !(this.currentTime % 2)) ? timerBlinkColors.red : timerBlinkColors.black;

      if (this.currentTime <= 0) {
        if (this.callback !== null) {
          this.callback();
        }
      } else {
        this.timeoutId = setTimeout(_tick, 1000);
      }
    };

    _tick();
  }
  stop() {
    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId);
    }
    this.callback = null;
  }
}
