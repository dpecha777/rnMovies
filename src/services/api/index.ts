import {MoviesApi} from './movies';

export class ApiService implements IService {
  private inited = false;

  movies: MoviesApi;

  constructor() {
    this.movies = new MoviesApi();
  }

  init = async (): PVoid => {
    if (!this.inited) {
      // your code ...

      this.inited = true;
    }
  };
}
