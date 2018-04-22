export default (element) => {
  let fragment = document.createElement(`div`);
  fragment.innerHTML = element;
  return fragment;
};


