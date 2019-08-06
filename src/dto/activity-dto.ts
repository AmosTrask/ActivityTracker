import { DTO } from "./dto.abstract";
import { ActivityType } from "../enums/activity-type";

export class ActivityDto extends DTO {
  public _id: string;
  public idUser: string;
  public activityType: ActivityType;
}
