const main = document.querySelector(`.central`);

export default (template) => {
  main.innerHTML = ``;
  return main.appendChild(template);
};
