const root = document.querySelector('.root');

const createTree = (arr) => {
  arr.forEach(elem => {
    if (!elem.children) {
      const div = document.createElement('div');
      div.textContent = elem.name;
      div.className = (elem.icon === 'opened-folder') ? `root__level root__level_opened root__level-${elem.level}` : `root__level root__level-${elem.level}`;
      root.append(div);
    } else {
      const div = document.createElement('div');
      div.textContent = elem.name;
      div.className = (elem.icon === 'opened-folder') ? `root__level root__level_opened root__level-${elem.level}` : `root__level root__level-${elem.level}`;
      root.append(div);
      
      createTree(elem.children);
    }
  })

  return root;
};

export default createTree;