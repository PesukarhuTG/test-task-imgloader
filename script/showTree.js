const root = document.querySelector('.root');
const btnTree = document.querySelector('.settings__button_root');

const showTree = () => {
  btnTree.addEventListener('click', () => {
    root.classList.toggle('root_blur');
  })
};

export default showTree;