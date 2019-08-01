import request from "supertest";
import app from "../../src/app";

import { getAccessToken } from "../helper/auth-helper";
import { initDb } from "../../scripts/init-db";

let token: string;

beforeAll(async () => {
  token = await getAccessToken();
  await initDb();
});

describe("Authentication", () => {
  it("should return 401 if not authenticated", () => {
    return request(app).get("/")
      .expect(401);
  });

  it("should return 200 if valid credentials are provided", (done) => {
    request(app).post("/auth")
      .send({
        username: "admin",
        password: "pwd",
      })
      .expect(200)
      .then((response: any) => {
        expect(response.body.token).toBeDefined();
        done();
      });
  });

  it("should return 401 if bad credentials are provided", (done) => {
    request(app).post("/auth")
      .send({
        username: "admin",
        password: "notmypwd",
      })
      .expect(401)
      .then((response: any) => {
        expect(response.body.token).toBeUndefined();
        done();
      });
  });

  it("should correctly identify authenticated user", (done) => {
    request(app).get("/users")
      .set("Authorization", "Bearer " + token)
      .expect(200)
      .then((response: any) => {
        expect(response.body.username).toBe("admin");
        done();
      });
  });
});
