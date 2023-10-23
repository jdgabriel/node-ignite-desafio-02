import { User } from "./user.entity";

export class UserAdapter {
  static toPersist(user: User) {
    return {
      id: user.id,
      name: user.props.name,
      email: user.props.email,
    };
  }
}
