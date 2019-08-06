import * as express from "express";
import { ActivityDto } from "../dto/activity-dto";
import { ActivityService } from "../services/activity-service";
import { Activity } from "../entities/activity/activity";

const router = express.Router();

router.post("/", async (req, res) => {
  if (req.user.id !== req.body.id) {
    res.status(400).send({ error: "You can only create an activity for your account."});
    return;
  }
  try {
    const activityDto: ActivityDto = await ActivityService.createActivity(req.body as Activity, req.user.id);
    res.status(200).send(activityDto);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

export { router as ActivityAPI };
