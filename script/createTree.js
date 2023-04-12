const root = document.querySelector('.root');

const createElem = (elem) => {
  const div = document.createElement('div');
  div.textContent = elem.name;
  div.className = (elem.icon === 'opened-folder') ? `root__level root__level_opened root__level-${elem.level}` : `root__level root__level-${elem.level}`;
  root.append(div);
};

const createTree = (arr) => {
  arr.forEach(elem => {
    createElem(elem);

    if (elem.children) {
      createTree(elem.children);
    }
  })

  return root;
};

export default createTree;