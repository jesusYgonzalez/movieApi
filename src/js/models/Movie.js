import axios from 'axios';

export default class Movie {
  constructor(id) {
    this.id = id;
  }

  async getMovie() {
    const key = '6ec6f1a98335d9e884a2fd4b207bafb2';
    try {
        const res = await axios(`https://api.themoviedb.org/3/movie/${this.id}?api_key=${key}&language=en-US`);
        this.title = res.data.title;
        this.overview = res.data.overview;
        this.revenue = res.data.revenue;
        this.tagline = res.data.tagline;
        this.poster_path = res.data.poster_path;
        this.runtime = res.data.runtime;
        this.homepage = res.data.homepage;
    } catch (error) {
      alert('oops... Something went wrong :/');
    }
  }
}