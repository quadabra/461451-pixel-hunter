import AbstractView from '../module.abstract-view';

export default class LoadingView extends AbstractView {
  constructor() {
    super();
  }

  template() {
    return `
<div style="position: fixed; top: 0; left: 0; width: 100%;">
<div style="margin: 0 auto">Loading...</div>
</div>`;
  }
}
