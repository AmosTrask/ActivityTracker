import { Activity } from "../entities/activity/activity";

export class ActivityFactory {
  public static makeActivity(activity: Activity): Activity {
    if (!activity) {
      return null;
    }

    return new Activity(activity);
  }
}
