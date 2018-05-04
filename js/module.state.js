export default class State {
  static statusBar(state, data) {
    let statusColor = `transparent`;
    if (state === `error`) {
      statusColor = `red`;
    }
    return `
<div style="position: fixed; top: 0; left: 0; width: 100%; background-color: ${statusColor}">
<div style="margin: 0 auto">${data}</div>
</div>`;
  }

  static showLoading() {

  }
}
