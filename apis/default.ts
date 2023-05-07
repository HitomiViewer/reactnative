export abstract class BaseWrapper<T, U> {
  public abstract index(): Array<T>;
  public abstract search(query: string): Array<T>;
  public abstract detail(id: string): U;
}

export class DefaultWrapper extends BaseWrapper<any, any> {
  public index() {
    return [];
  }
  public search(query: string) {
    return [];
  }
  public detail(id: string) {}
}
