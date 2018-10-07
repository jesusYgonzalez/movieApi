import { elements } from './base';

//automatically return value
export const getInput = () => elements.searchInput.value;

export const clearInput = () => elements.searchInput.value = '';

export const clearResults = () => {
  elements.searchResultList.innerHTML = '';
};


const renderMovies = movie => {
  const moviePoster = 'https://image.tmdb.org/t/p/w185';
  const movieLink = 'http://www.themoviedb.org/movie/';
  const markup = `    
    <table id="customers">
        <tr>
            <th>Poster</th>
            <th>Information</th>
            <th>Release Date</th>
        </tr>
        <tr>
            <td>
                <img src="${ moviePoster + movie.poster_path}" alt="Poster">
            </td>
            <td>
                <h2><strong>${movie.title}</strong></h2>
                <p>Voter Average: ${movie.vote_average}</p>
                <p>${movie.overview}</p>
                <button class="button button2"><a href="${ movieLink + movie.id }" target="_blank">View</a></button>
            </td>
            <td>${movie.release_date}</td>
        </tr>
    </table>
  `;
    elements.searchResultList.insertAdjacentHTML('beforeend', markup);
};

export const renderResults = movies =>  {
  movies.forEach(renderMovies);
};

