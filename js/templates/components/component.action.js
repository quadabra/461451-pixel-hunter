import AbstractView from "../../module.abstract-view";
//
// export default (data) => (`
//     <label class="game__answer game__answer--photo">
//     <input name="${data.name}" type="radio" value="photo">
//     <span>Фото</span>
//     </label>
//     <label class="game__answer game__answer--paint">
//     <input name="${data.name}" type="radio" value="paint">
//     <span>Рисунок</span>
//     </label>
// `);

export default class ActionView extends AbstractView {
  template() {
    return `<label class="game__answer game__answer--photo">
    <input name="${this.data.name}" type="radio" value="photo">
    <span>Фото</span>
    </label>
    <label class="game__answer game__answer--paint">
    <input name="${this.data.name}" type="radio" value="paint">
    <span>Рисунок</span>
    </label>`;
  }
}
