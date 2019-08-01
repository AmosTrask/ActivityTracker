import { DTO } from "../dto/dto.abstract";
import { UserDto } from "../dto/user-dto";
import { Entity } from "../entities/entity.abstract";
import { User } from "../entities/user";

export class DtoFactory {
  public static convert(entity: Entity): DTO {
    if (entity instanceof User) {
      return this.makeUserDto(entity);
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
}
