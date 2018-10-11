export const elements = {
  searchForm: document.querySelector('.search'),
  searchInput: document.querySelector('.search_field'),
  searchResultList: document.querySelector('.results_list'),
  searchRes: document.querySelector('.results'),
  movie: document.querySelector('.movieDetails'),
  searchResPages: document.querySelector('.showButtons')
};


export const renderSpinner = parent => {
  const loader = `
    <div class ="loader"></div>
  `;
  parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearSpinner = () => {
  const loader = document.querySelector('.loader');
  if (loader) loader.parentElement.removeChild(loader);
};