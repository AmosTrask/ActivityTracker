import request from "supertest";
import app from "../../src/app";

export async function getAccessToken(): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    request(app).post("/auth")
      .send({
        username: "admin",
        password: "pwd",
      })
      .then((response) => {
        resolve(response.body.token);
      });
  });
}
