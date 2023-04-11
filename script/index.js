const fileBtn = document.querySelector('.settings__input-file');
const descName = document.querySelector('.description__col_name');
const descType = document.querySelector('.description__col_type');
const descSize = document.querySelector('.description__col_size');
const descDate = document.querySelector('.description__col_date');
const descPath = document.querySelector('.description__col_path');
const descOwner = document.querySelector('.description__col_owner');
const img = document.querySelector('.picture__img');

const handleChange = (e) => {
  if (e.target.files !== null) {
    const target = e.target.files[0]

    const imgURL = URL.createObjectURL(target);
    const date = new Date(target.lastModified);

    descName.textContent = target.name.split('.')[0];
    descSize.textContent = `${(target.size / 1000).toFixed(2)} Kb`;
    descType.textContent = target.type.split('/')[1];
    descDate.textContent = date.toLocaleDateString();
    img.src = imgURL;
  }
};

fileBtn.addEventListener('change', handleChange);


