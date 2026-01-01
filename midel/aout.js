import { aoutDl } from "../dl/user.js";

export default async function aout(req, res, next) {
  const headers = req.headers;
  if (!headers || !headers.username || !headers.password) {
    return res
      .status(401)
      .send("Not aouthoris most send username and password in headers.");
  }
  const isExist = await aoutDl(headers.username, headers.password);
  if (!isExist) {
    return res.status(401).send("User not exist.");
  }
  req.user = isExist.username;
  next();
}
