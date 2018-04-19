export default (template) => {
  const main = document.querySelector(`.central`);
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
  main.appendChild(template.cloneNode(true));
};
