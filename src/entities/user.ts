import { ObjectID } from "mongodb";
import { Entity } from "./entity.abstract";

export class User extends Entity {
  public _id?: ObjectID;
  public username: string;
  public firstName: string;
  public lastName: string;
  public password: string;
  public email: string;
  public role: string;

  constructor(user: User) {
    super();

    this._id = user._id;
    this.username = user.username;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.password = user.password;
    this.email = user.email;
    this.role = user.role;
  }
}
