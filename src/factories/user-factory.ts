import { User } from "../entities/user";
import { Roles } from "../enums/roles";
import { UserDto } from "../dto/user-dto";
import { ObjectID } from "bson";

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

  public static makeUserFromDto(userDto: UserDto): User {
    if (userDto.role === Roles.USER) {
      return new User({
        _id: new ObjectID(userDto._id),
        username: userDto.username,
        firstName: userDto.firstName,
        lastName: userDto.lastName,
        password: "",
        email: userDto.email,
        role: userDto.role,
      });
    }
    return new User({
      _id: new ObjectID(userDto._id),
      username: userDto.username,
      firstName: userDto.firstName,
      lastName: userDto.lastName,
      password: "",
      email: userDto.email,
      role: userDto.role,
    });
  }
}
