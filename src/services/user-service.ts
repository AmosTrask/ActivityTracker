import { User } from "../entities/user";

import * as bcrypt from "bcryptjs";
import { UserDao } from "../dao/user-dao";
import { DtoFactory } from "../factories/dto-factory";
import { UserDto } from "../dto/user-dto";

export class UserService {

  public static async createUser(user: User): Promise<UserDto> {
    const existing: boolean = await this.existingUsername(user.username);
    if (existing) {
      throw new Error("Username already taken.");
    }
    const hashedPassword: string = await bcrypt.hash(user.password, Number(process.env.SALT_ROUNDS));
    user.password = hashedPassword;

    const savedUser: User = await UserDao.createUser(user);
    return DtoFactory.convert(savedUser) as UserDto;
  }

  public static async authenticateUser(username: string, password: string): Promise<UserDto> {
    const user: User = await UserDao.getUserByUsername(username);
    if (user) {
      const result = await bcrypt.compare(password, user.password);
      if (result) {
        return DtoFactory.convert(user) as UserDto;
      }
    }
    throw new Error("Authentification failed.");
  }

  /**
   * Returns `true` if the provided username is already
   * existing in the database
   * @param username
   */
  public static async existingUsername(username: string): Promise<boolean> {
    const user = await UserDao.getUserByUsername(username);
    if (user) {
      return true;
    } else {
      return false;
    }
  }
}
