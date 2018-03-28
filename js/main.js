'use strict';
const screens = document.querySelectorAll('template');
const main = document.querySelector('.central');
const start = 0;
let page = start;

function screenRender(block, template) {
  while (block.firstChild) {
    block.removeChild(block.firstChild);
  }
  block.appendChild(template.cloneNode(true));
}

screenRender(main, screens[start].content);

function screenSwitch(evt, block, templates) {
    if (evt.keyCode === 39 && evt.altKey && page < templates.length) {
      page++;
      screenRender(block, templates[page].content);
    }
    if (evt.keyCode === 37 && evt.altKey && page > 0) {
      page--;
      screenRender(block, templates[page].content);
    }
}

document.addEventListener('keydown', function (evt) {
  screenSwitch(evt, main, screens);
});
