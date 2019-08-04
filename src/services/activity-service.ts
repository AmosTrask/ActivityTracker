import { User } from "../entities/user";

import * as bcrypt from "bcryptjs";
import { UserDao } from "../dao/user-dao";
import { DtoFactory } from "../factories/dto-factory";
import { UserDto } from "../dto/user-dto";
import { Activity } from "../entities/activity/activity";
import { ActivityDao } from "../dao/activity-dao";
import { ActivityDto } from "../dto/activity-dto";

export class ActivityService {

  public static async createActivity(activity: Activity, user: User): Promise<ActivityDto> {
    const savedActivity: Activity = await ActivityDao.createActivity(activity);
    if (savedActivity) {
        user.activities.push(savedActivity);
    }
    return DtoFactory.convert(savedActivity) as ActivityDto;
  }
}
