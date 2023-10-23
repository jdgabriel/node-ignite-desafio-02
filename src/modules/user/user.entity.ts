import { Entity } from "../../common/entity";
import { UserSchema } from "./user.schema";

export class User extends Entity<UserSchema> {
  private constructor(props: UserSchema, id?: string) {
    super(props, id);
  }

  static create(props: UserSchema, id?: string) {
    return new User(props, id);
  }
}
