require("dotenv").config();

import { initDb } from "../../scripts/init-db";
import { User } from "../../src/entities/user";
import { Roles } from "../../src/enums/roles";
import { UserService } from "../../src/services/user-service";

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
  await initDb();
});

afterAll(async () => {
  await initDb();
});

describe("user service", () => {
  it("should create a user correctly", async (done) => {
    const user = new User(userRef);
    await UserService.createUser(user);

    const authenticatedUser = await UserService.authenticateUser(userRef.username, userRef.password);

    expect(authenticatedUser).not.toBeNull();
    expect(authenticatedUser.username).toBe(user.username);
    expect(authenticatedUser.role).toBe(user.role);

    done();
  });

  it("should fail to create a user with an existing username", async (done) => {
    const user = new User(userRefCopy);

    await expect(UserService.createUser(user)).rejects.toThrow("Username already taken.");

    done();
  });

  it("should fail login if invalid password", async (done) => {
    await expect(UserService.authenticateUser("admin", "wrongPassword")).rejects.toThrow("Authentification failed.");

    done();
  });

  it("should fail login if invalid username", async (done) => {
    await expect(UserService.authenticateUser("Wrongadmin", "pwd")).rejects.toThrow("Authentification failed.");

    done();
  });
});
