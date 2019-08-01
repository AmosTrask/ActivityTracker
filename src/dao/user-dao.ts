import { ObjectID, Db, Collection, MongoError, WriteOpResult } from "mongodb";
import { User } from "../entities/user";
import { MongoDB } from "../providers/mongodb";
import { UserFactory } from "../factories/user-factory";

export class UserDao {

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
}
