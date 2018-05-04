import AbstractView from '../module.abstract-view';

export default class ErrorView extends AbstractView {
  constructor(error) {
    super();
    this.error = error;
  }

  template() {
    return `
<div style="position: fixed; top: 0; left: 0; width: 100%;">
<div style="margin: 0 auto">Произошла ошибка... ${this.error.message}</div>
</div>`;
  }
}
