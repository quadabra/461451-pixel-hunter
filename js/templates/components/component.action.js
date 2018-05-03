export default (data) => (`
    <label class="game__answer game__answer--photo">
    <input name="${data.name}" type="radio" value="photo">
    <span>Фото</span>
    </label>
    <label class="game__answer game__answer--paint">
    <input name="${data.name}" type="radio" value="painting">
    <span>Рисунок</span>
    </label>
`);
