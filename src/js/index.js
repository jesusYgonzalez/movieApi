//ENTRY POINT
import Search from './models/Search';

//Global storage
const store = {};

const controlSearch = async () => {
  //get query from view
  const query = 'avengers';

  if(query) {
    // new search object and add it to the storage
    store.search = new Search(query);

    //search for recipes
    await store.search.getResults(); //returns promise

    //render results on UI
    console.log(store.search.result);

  }
};

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});


