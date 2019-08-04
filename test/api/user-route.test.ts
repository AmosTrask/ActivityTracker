import request from "supertest";
import app from "../../src/app";

import { getAccessToken } from "../helper/auth-helper";
import { User } from "../../src/entities/user";
import { Roles } from "../../src/enums/roles";
import { initDb } from "../../scripts/init-db";
import { UserDto } from "../../src/dto/user-dto";

let token: string;

const admin: UserDto = {
    _id: "5bc362b8d95d221ddccaa217",
    role: Roles.USER,
    username: "admin",
    firstName: "testFN",
    lastName: "testLN",
    email: "test@test.com",
    activities: [],
};

const user: UserDto = {
    _id: "5bc362b8d95d221ddccaa218",
    role: Roles.USER,
    username: "testUser",
    firstName: "testFN",
    lastName: "testLN",
    email: "test@test.com",
    activities: [],
};

beforeAll(async () => {
    token = await getAccessToken();
    await initDb();
});

describe("User api", () => {
    it("should update user ", (done) => {
        request(app).put("/user")
            .set("Authorization", "Bearer " + token)
            .send(admin)
            .expect(200)
            .then((response: any) => {
                expect(response.body.firstName).toBe("testFN");
                done();
            });
    });

    it("should not update user with existing username", (done) => {
        request(app).put("/user")
            .set("Authorization", "Bearer " + token)
            .send(user)
            .expect(400)
            .then((response: any) => {
                expect(response.body.error).toBe("You can only modify your account.");
                done();
            });
    });
});
