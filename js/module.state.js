import AbstractView from './module.abstract-view';

export default class State extends AbstractView {
  constructor(error) {
    super();
    this.error = error;
    this.state = null;
  }

  template() {
    return `
<div style="position: fixed; top: 0; left: 0; width: 100%;">
<div style="margin: 0 auto">Loading... ${this.state}</div>
</div>`;
  }

  done() {
    this.state = `done`;
  }

  errorMessage() {
    this.state = `Произошла ошибка` + this.error.message;
  }

}
