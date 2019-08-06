import { DTO } from "../dto/dto.abstract";
import { UserDto } from "../dto/user-dto";
import { Entity } from "../entities/entity.abstract";
import { User } from "../entities/user";
import { Activity } from "../entities/activity/activity";
import { ActivityDto } from "../dto/activity-dto";

export class DtoFactory {
  public static convert(entity: Entity): DTO {
    if (entity instanceof User) {
      return this.makeUserDto(entity);
    } else if (entity instanceof Activity) {
      return this.makeActivityDto(entity);
    } else {
      return null;
    }
  }

  private static makeUserDto(user: User): UserDto {
    const userDto: UserDto = new UserDto();

    userDto._id = user._id.toHexString();
    userDto.role = user.role;
    userDto.username = user.username;
    userDto.firstName = user.firstName;
    userDto.lastName = user.lastName;
    userDto.email = user.email;

    return userDto;
  }

  private static makeActivityDto(activity: Activity): ActivityDto {
    const activityDto: ActivityDto = new ActivityDto();

    activityDto._id = activity._id.toHexString();
    activityDto.idUser = activity.idUser;
    activityDto.activityType = activity.activityType;

    return activityDto;
  }
}
