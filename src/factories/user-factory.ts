import { User } from "../entities/user";
import { Roles } from "../enums/roles";

export class UserFactory {
  public static makeUser(user: User): User {
    if (!user) {
      return null;
    }

    if (user.role === Roles.USER) {
      return new User(user as User);
    }

    return new User(user);
  }
}
