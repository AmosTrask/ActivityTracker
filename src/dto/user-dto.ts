import { DTO } from "./dto.abstract";
import { Activity } from "../entities/activity/activity";

export class UserDto extends DTO {
  public _id: string;
  public username: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public role: string;
}
