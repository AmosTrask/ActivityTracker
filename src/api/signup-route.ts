import * as express from "express";
import { UserService } from "../services/user-service";
import { UserDto } from "../dto/user-dto";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const userDto: UserDto = await UserService.createUser({
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
      email: req.body.email,
      role: req.body.role,
    });
    res.status(201).send(userDto);

  } catch (err) {
    if (err.message) {
      res.status(400).send({ error: err.message });
    } else {
      res.sendStatus(500);
    }
  }
});

export { router as SignupAPI };
