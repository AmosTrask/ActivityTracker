import request from "supertest";
import app from "../../src/app";

import { getAccessToken } from "../helper/auth-helper";
import { User } from "../../src/entities/user";
import { Roles } from "../../src/enums/roles";
import { initDb } from "../../scripts/init-db";

let token: string;

const userRef: User = {
  role: Roles.USER,
  username: "testUser",
  firstName: "testFN",
  lastName: "testLN",
  password: "testPwd",
  email: "test@test.com",
};

const userRefCopy: User = {
  role: Roles.USER,
  username: "testUser",
  firstName: "testFN",
  lastName: "testLN",
  password: "testPwd",
  email: "test@test.com",
};

beforeAll(async () => {
  token = await getAccessToken();
  await initDb();
});

describe("User manager", () => {
  it("should create user ", (done) => {
    request(app).post("/signup")
      .send(userRef)
      .expect(201)
      .then((response: any) => {
        expect(response.body.username).toBe("testUser");
        done();
      });
  });

  it("should not create user with existing username", (done) => {
    request(app).post("/signup")
      .send(userRefCopy)
      .expect(400)
      .then((response: any) => {
        expect(response.body.error).toBe("Username already taken.");
        done();
      });
  });
});
