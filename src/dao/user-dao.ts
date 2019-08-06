import { ObjectID, Db, Collection, MongoError, WriteOpResult } from "mongodb";
import { User } from "../entities/user";
import { MongoDB } from "../providers/mongodb";
import { UserFactory } from "../factories/user-factory";
import { UserDto } from "../dto/user-dto";

export class UserDao {

  public static async getUserById(id: string) {
    const db: Db = await MongoDB.Instance.getClient();
    if (db) {
      const userDB: Collection<User> = db.collection("users");
      const user: User = await userDB.findOne({ _id: new ObjectID(id) });
      if (user) {
        return UserFactory.makeUser(user);
      }
    }
    return null;
  }

  public static async getUserByUsername(username: string): Promise<User> {
    const db: Db = await MongoDB.Instance.getClient();
    if (db) {
      const userDB: Collection<User> = db.collection("users");
      const user: User = await userDB.findOne({ username });
      if (user) {
        return UserFactory.makeUser(user);
      }
    }
    return null;
  }

  public static async createUser(user: User): Promise<User> {
    const db: Db = await MongoDB.Instance.getClient();
    if (db) {
      const userDB: Collection<User> = db.collection("users");
      const result = await userDB.insertOne(user);
      if (result.result.ok) {
        return UserFactory.makeUser(user);
      }
    }
    return null;
  }

  public static async updateUser(user: User): Promise<User> {
    const db: Db = await MongoDB.Instance.getClient();
    if (db) {
      const userDB: Collection<User> = db.collection("users");
      const result = await userDB.updateOne(
        { _id: new ObjectID(user._id) },
        {
          $set:
          {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            activities: user.activities,
          },
        });
      if (result.result.ok && result.result.nModified === 1) {
        return UserFactory.makeUser(user);
      }
    }
    return null;
  }
}
