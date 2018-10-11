import { elements } from './base';

//automatically return value
export const getInput = () => elements.searchInput.value;

export const clearInput = () => elements.searchInput.value = '';

export const clearResults = () => {
  elements.searchResultList.innerHTML = '';
  elements.searchResPages.innerHTML = '';
};


const renderMovies = movie => {
  const moviePoster = 'https://image.tmdb.org/t/p/w92';
  const movieLink = 'http://www.themoviedb.org/movie/';
  const markup = `    
    <table id="customers">
        <tr>
            <th style="text-align: center; font-size: 1rem">Poster</th>
            <th style="font-size: 1rem; text-align: center">Movie</th>
            <th style="font-size: 1rem; text-align:center">Release Date</th>
        </tr>
        <tr>
            <td>
                <a  href="#${movie.id }">
                <img src="${ moviePoster + movie.poster_path }" alt="Poster"></a>
            </td>
            <td>
                <h2 style="text-align: center">
                <strong>${movie.title}</strong>
                </h2>
                <p style="text-align: center">Voter Average: ${movie.vote_average}</p>
                <button 
                class="button button2">
                <a href="${ movieLink + movie.id }" target="_blank">
                View on TMDB
                </a>
                </button>
            </td>
            <td class="dateTd">${movie.release_date}</td>
        </tr>
    </table>
  `;
    elements.searchResultList.insertAdjacentHTML('beforeend', markup);
};



// type: 'prev' or 'next'
const createButton = (page, type) => `
    <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
        <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
        <div class="search__icon">
            <use{type === 'prev' ? 'left' : 'right'}"></use>
        </div>
    </button>
`;

const renderButtons = (page, numResults, resPerPage) => {
  const pages = Math.ceil(numResults / resPerPage);

  let button;
  if (page === 1 && pages > 1) {
    // Only button to go to next page
    button = createButton(page, 'next');
  } else if (page < pages) {
    // Both buttons
    button = `
            ${createButton(page, 'prev')}
            ${createButton(page, 'next')}
        `;
  } else if (page === pages && pages > 1) {
    // Only button to go to prev page
    button = createButton(page, 'prev');
  }

  elements.searchResPages.insertAdjacentHTML('afterbegin', button);
};

export const renderResults = (movies, page = 1, resPerPage = 3) => {
  // render results of current page
  const start = (page - 1) * resPerPage;
  const end = page * resPerPage;

  movies.slice(start, end).forEach(renderMovies);

  // render pagination buttons
  renderButtons(page, movies.length, resPerPage);
};










