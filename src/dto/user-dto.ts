import { DTO } from "./dto.abstract";

export class UserDto extends DTO {
  public _id: string;
  public username: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public role: string;
}
