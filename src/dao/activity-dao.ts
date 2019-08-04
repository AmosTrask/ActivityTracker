import { ObjectID, Db, Collection, MongoError, WriteOpResult } from "mongodb";
import { MongoDB } from "../providers/mongodb";
import { Activity } from "../entities/activity/activity";
import { ActivityFactory } from "../factories/activity-factory";

export class ActivityDao {

  public static async getActivityById(id: string): Promise<Activity> {
    const db: Db = await MongoDB.Instance.getClient();
    if (db) {
      const activityDB: Collection<Activity> = db.collection("activities");
      const activity: Activity = await activityDB.findOne({ _id: new ObjectID(id) });
      if (activity) {
        return ActivityFactory.makeActivity(activity);
      }
    }
    return null;
  }

  public static async createActivity(activity: Activity): Promise<Activity> {
    const db: Db = await MongoDB.Instance.getClient();
    if (db) {
      const activityDB: Collection<Activity> = db.collection("activities");
      const result = await activityDB.insertOne(activity);
      if (result.result.ok) {
        return ActivityFactory.makeActivity(activity);
      }
    }
    return null;
  }
}
