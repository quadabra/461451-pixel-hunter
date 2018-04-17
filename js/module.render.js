export default (block, template) => {
  while (block.firstChild) {
    block.removeChild(block.firstChild);
  }
  block.appendChild(template.cloneNode(true));
};
