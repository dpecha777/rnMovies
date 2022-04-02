import {stores} from '../../stores';

import {Platform} from 'react-native';

// url for the local api using json-server
// android doesn't like localhost xD
const url = Platform.OS === 'ios' ? 'http://localhost:3000' : 'http://10.0.2.2:3000';

export class MoviesApi {
  getCarousels = async (): PVoid => {
    const {movies} = stores;

    movies.setLoading(true);

    const res = await fetch(url + '/carousels');
    const json: CarouselsWithMovies = await res.json();

    movies.setCarousels(json);
    movies.setLoading(false);
  };

  getMovieDetail = async (id: number): PVoid => {
    const {movies} = stores;

    movies.setLoading(true);

    const res = await fetch(url + `/movies/${id}`);
    const json: Movie = await res.json();

    movies.setCurrentMovieDetail(json);
    movies.setLoading(false);
  };
}
