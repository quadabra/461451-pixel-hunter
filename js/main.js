'use strict';
const screens = document.querySelectorAll('template');
const main = document.querySelector('.central');
const start = 0;
let page = start;


function screenRender(block, template) {
  while (block.firstChild) {
    block.removeChild(block.firstChild);
  }
  block.insertBefore(template, block.firstChild);
}

function screenSwitch(evt, block, templates) {
  if (evt.altKey) {
    if (evt.keyCode === 39 && page < templates.length) {
      screenRender(block, templates[page].content);
      page++;
    }
    if (evt.keyCode === 37 && page > 0) {
      screenRender(block, templates[page].content);
      page--;
    }
    console.log(page);
  }
}

document.addEventListener('keydown', function (evt) {
  screenSwitch(evt, main, screens);
});
