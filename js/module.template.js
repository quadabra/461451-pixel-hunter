export default (element) => {
  let fragment = document.createDocumentFragment();
  let template = document.createElement(`template`);
  template.innerHTML = element;
  fragment.appendChild(template.content);
  return fragment;
};


