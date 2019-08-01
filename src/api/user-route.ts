import * as express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(req.user);
});

export { router as UserAPI };
