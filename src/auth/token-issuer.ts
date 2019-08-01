import * as express from "express";
import { Request, Response } from "express";
import { UserService } from "../services/user-service";
const router = express.Router();

import * as jwt from "jsonwebtoken";

const tokenOptions: jwt.SignOptions = {
    expiresIn: 60 * Number(process.env.TOKEN_MINUTES),
    issuer: "workoutplanner",
};

router.post("/", async (req: Request, res: Response) => {
    try {
        const user = await UserService.authenticateUser(req.body.username, req.body.password);
        const payload = {
            id: user._id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
        };
        const token = jwt.sign(payload, process.env.TOKEN_SECRET || "mySecret", tokenOptions);
        res.status(200).send({ token });
    } catch (err) {
        res.status(401).send({ error: err.message });
    }
});

export { router as TokenIssuer };
