
import renderTemplateElement from "./module.render";
import introPage from './templates/module.intro.js';

//function toNextPage(number) {
//  return function () {
//    renderTemplateElement(createTemplateElement(screens[number].template));
//    screens[number].ctrl(toNextPage(number + 1));
//  };
//}

//renderTemplateElement(createTemplateElement(screens[0].template));
//screens[0].ctrl(toNextPage(1));

renderTemplateElement(introPage);
