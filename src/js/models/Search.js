import axios from "axios/index";
import Movie from "./Movie";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  //async function returns a promise
  async  getResults() {
    const key = '6ec6f1a98335d9e884a2fd4b207bafb2';
    try {
      const res = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${this.query}`);
      this.result = res.data.results;
      // console.log(this.result);
    } catch (error) {
      alert(error);
    }
  }
}





// 332562



// tmdb 6ec6f1a98335d9e884a2fd4b207bafb2

//96e274f0