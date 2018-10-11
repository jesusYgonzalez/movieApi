//ENTRY POINT
import Search from './models/Search';
import Movie from './models/Movie';
import { elements, renderSpinner, clearSpinner } from "./views/base";
import * as searchView from './views/searchView';
import * as movieView from "./views/movieView";

//Global storage
const store = {};

// ********************* SEARCH CONTROLLER ********************* //

//funciton for when form is submitted
const controlSearch = async () => {
  //get query from view
  const query = searchView.getInput();
  console.log(query);

  if(query) {
    // new search object and add it to the storage
    store.search = new Search(query);

    searchView.clearInput();
    searchView.clearResults();
    renderSpinner(elements.searchRes);

    try {
    //search for recipes... have to wait for movies to come back from api
    await store.search.getResults(); //returns promise

    //render results on UI
    clearSpinner();
    searchView.renderResults(store.search.result);
    } catch (err) {
      alert('Something went wrong with the search...');
      clearSpinner();
    }
  }
};

//adding an event listener for when the submit button gets triggered
elements.searchForm.addEventListener('submit', e => {
    //prevent document from reloading
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
  const btn = e.target.closest('.btn-inline');
  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderResults(store.search.result, goToPage);
  }
});



// ********************* MOVIE CONTROLLER ********************* //

const controlMovie = async () => {
  const id = window.location.hash.replace('#', '');

  if (id) {
    movieView.clearMovie();
    renderSpinner(elements.movie);

    //new movie object
    store.movie = new Movie(id);

    try {
        //get movie data
        await store.movie.getMovie();

        clearSpinner();
        movieView.renderMovie(store.movie);
        console.log(store.movie);


    } catch (err) {
      alert('Error getting movie!');
    }
  }
};

// window.addEventListener('hashchange', controlMovie);
// window.addEventListener('load', controlMovie);
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlMovie));

























//Github
                             //monterreyesnumerouno!