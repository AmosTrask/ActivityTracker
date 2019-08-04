import { ObjectID } from "mongodb";
import { Entity } from "../entity.abstract";
import { ActivityType } from "../../enums/activity-type";

export class Activity extends Entity {
    public _id?: ObjectID;
    public activityType: ActivityType;

    constructor(activity: Activity) {
        super();

        this._id = activity._id;
        this.activityType = activity.activityType;
    }
}
