const tree = [
  { name: 'FolderA', icon: 'folder', level: 1 },
  {
      name: 'FolderB',
      icon: 'opened-folder',
      level: 1,
      children: [
          { name: 'Node1', icon: 'folder', level: 2 },
          {
              name: 'Node2',
              icon: 'opened-folder',
              level: 2,
              children: [
                  { name: 'AppA', icon: 'folder', level: 3 },
                  { name: 'AppB', icon: 'folder', level: 3 },
                  { name: 'AppC', icon: 'folder', level: 3 },
              ]
          },
          {
              name: 'Node3',
              icon: 'opened-folder',
              level: 2,
              children: [{ name: 'Assets', icon: 'text', level: 3 }]
          }
      ]
  },
  { name: 'FolderC', icon: 'folder', level: 1 },
];

export default tree;