import { elements } from "./base";

export const clearMovie = () => {
  elements.movie.innerHTML = '';
};

export const renderMovie = movie => {
  const moviePoster = 'https://image.tmdb.org/t/p/w185'+ movie.poster_path;
  const markup = `
    <figure>
        <img src="${ moviePoster }" alt="${movie.title}" class="movie__img"> 
    </figure>
    <div>
        <h1>
            <span>${movie.title}</span>
        </h1>
        <p>${movie.overview}</p>
    </div>
        
        
  `;
  elements.movie.insertAdjacentHTML('afterbegin', markup);
};