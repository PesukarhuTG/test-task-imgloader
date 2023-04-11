const fileBtn = document.querySelector('.settings__input-file');
const descName = document.querySelector('.description__col_name');
const descType = document.querySelector('.description__col_type');
const descSize = document.querySelector('.description__col_size');
const descDate = document.querySelector('.description__col_date');
const descPath = document.querySelector('.description__col_path');
const img = document.querySelector('.picture__img');

const changeFile = () => {
  const checkFileSize = (size) => {
    if(size < 1024) {
      return size + ' bytes';
    } else if (size > 1024 && size < 1048576) {
      return (size / 1024).toFixed(2) + ' Kb';
    } else if (size > 1048576) {
      return (size / 1048576).toFixed(2) + 'Mb';
    }
  };

  const handleChange = (e) => {
    if (e.target.files[0] !== undefined) {
      const target = e.target.files[0]
  
      const imgURL = URL.createObjectURL(target);
      const date = new Date(target.lastModified);
      const path = e.target.value.split('fakepath');
  
      descName.textContent = target.name.split('.')[0];
      descSize.textContent = checkFileSize(target.size);
      descType.textContent = target.type.split('/')[1];
      descDate.textContent = date.toLocaleDateString();
      descPath.textContent = `${path[0]}...${path[1]}`;
      img.src = imgURL;
    }
  };

  fileBtn.addEventListener('change', handleChange);
};

export default changeFile;


