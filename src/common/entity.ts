import { randomUUID } from "node:crypto";

export class Entity<T> {
  public props: T;
  private _id: string;

  constructor(props: T, id?: string) {
    this.props = props;
    this._id = id ?? randomUUID();
  }

  get id() {
    return this._id;
  }
}
