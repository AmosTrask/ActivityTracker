require("dotenv").config();

import express from "express";
import { AuthGuard } from "./auth/auth-guard";
import { TokenIssuer } from "./auth/token-issuer";
import { UserAPI } from "./api/user-route";
import { SignupAPI } from "./api/signup-route";

const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", TokenIssuer);
app.use("/signup", SignupAPI);

app.use(AuthGuard);

app.use("/users", UserAPI);

export default app;
