import {makeAutoObservable} from 'mobx';
import {hydrateStore, makePersistable} from 'mobx-persist-store';

export class Movies implements IStore {
  carousels = [] as CarouselsWithMovies;

  loading = false;
  setLoading(val: boolean) {
    this.loading = val;
  }

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: Movies.name,
      properties: ['carousels'],
    });
  }

  hydrate = async (): PVoid => {
    await hydrateStore(this);
  };
}
