//ENTRY POINT
import Search from './models/Search';
import { elements } from "./views/base";
import * as searchView from './views/searchView';

//Global storage
const store = {};

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

    //search for recipes... have to wait for movies to come back from api
    await store.search.getResults(); //returns promise

    //render results on UI
    searchView.renderResults(store.search.result);
    console.log(store.search.result);

  }
};

//adding an event listener for when the submit button gets triggered
elements.searchForm.addEventListener('submit', e => {
    //prevent document from reloading
    e.preventDefault();
    controlSearch();
});

                              //Github
                             //monterreyesnumerouno!