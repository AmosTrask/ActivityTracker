require("dotenv").config();

import { initDb } from "../../scripts/init-db";
import { Activity } from "../../src/entities/activity/activity";
import { ActivityType } from "../../src/enums/activity-type";
import { ActivityService } from "../../src/services/activity-service";
import { ActivityDto } from "../../src/dto/activity-dto";

const activityRef: Activity = {
    idUser: "5bc362b8d95d221ddccaa217",
    activityType: ActivityType.WORKOUT,
};

beforeAll(async () => {
    await initDb();
});

afterAll(async () => {
    await initDb();
});

describe("activity service", () => {
    it("should create an activity correctly", async (done) => {
        const activity = new Activity(activityRef);
        const activityDto: ActivityDto = await ActivityService.createActivity(activity);

        const retrievedActivity: ActivityDto [] = await ActivityService.getActivitiesByUser(activityRef.idUser);

        expect(retrievedActivity).not.toBeNull();
        expect(retrievedActivity).toContainEqual(activityDto);

        done();
    });
});
