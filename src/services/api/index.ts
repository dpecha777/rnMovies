export class ApiService implements IService {
  private inited = false;

  constructor() {}

  init = async (): PVoid => {
    if (!this.inited) {
      // your code ...

      this.inited = true;
    }
  };
}
