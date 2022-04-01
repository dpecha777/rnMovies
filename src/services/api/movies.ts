import {stores} from '../../stores';

export class MoviesApi {
  getCarousels = async (): PVoid => {
    const {movies} = stores;

    movies.setLoading(true);

    const res = await fetch('http://localhost:3000/carousels');
    const json: CarouselsWithMovies = await res.json();

    movies.setCarousels(json);
    movies.setLoading(false);
  };
}
