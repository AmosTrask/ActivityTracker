import { ObjectID } from "mongodb";
import { Entity } from "../entity.abstract";
import { ActivityType } from "../../enums/activity-type";

export class Activity extends Entity {
    public _id?: ObjectID;
    public idUser: string;
    public activityType: ActivityType;

    constructor(activity: Activity) {
        super();

        this._id = activity._id;
        this.idUser = activity.idUser;
        this.activityType = activity.activityType;
    }
}
