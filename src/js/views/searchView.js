import { elements } from './base';

//automatically return value
export const getInput = () => elements.searchInput.value;

export const clearInput = () => elements.searchInput.value = '';

export const clearResults = () => {
  elements.searchResultList.innerHTML = '';
};

const renderMovies = movie => {
  const markup = `
    <li>
        <a href="${movie.id}">
            <h4>${movie.title}</h4>
            <p>${movie.overview}</p>
            <p>${movie.vote_average}</p>
        </a>
    </li>
  `;
    elements.searchResultList.insertAdjacentHTML('beforeend', markup);
};

export const renderResults = movies =>  {
  //other option
  //movies.forEach(el => renderMovies(el))
  movies.forEach(renderMovies);
};