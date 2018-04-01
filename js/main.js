import {renderTemplateElement} from "../js/module.render";
import intro from '../js/module.intro.js';
import greeting from '../js/module.greeting.js';
import rules from '../js/module.rules.js';
import game_1 from '../js/module.game_1.js';
import game_2 from '../js/module.game_2.js';
import game_3 from '../js/module.game_3.js';
import stats from '../js/module.stats';

const main = document.querySelector(`.central`);
let screen = intro;

renderTemplateElement(main, screen);


