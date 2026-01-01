import { aoutDl } from "../dl/user.js";

export default async function aout(req, res, next) {
  const headers = req.headers;
  if (!req.headers || !req.headers.username || !req.headers.password) {
    return res
      .status(401)
      .send("Not aouthoris most send username and password in headers.");
  }
  const isExist = await aoutDl(req.headers.username, req.headers.password);
  if (!isExist) {
    return res.status(401).send("User not exist.");
  }
  next();
}
