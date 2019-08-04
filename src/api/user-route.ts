import * as express from "express";
import { UserDto } from "../dto/user-dto";
import { UserService } from "../services/user-service";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(req.user);
});

router.put("/", async (req, res) => {
  if (req.user.id !== req.body._id) {
    res.status(400).send({ error: "You can only modify your account."});
    return;
  }
  try {
    const userDto: UserDto = await UserService.updateUser(req.body as UserDto);
    res.status(200).send(userDto);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

export { router as UserAPI };
