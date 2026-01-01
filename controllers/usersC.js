import { getAllMessagesS } from "../services/messagesS.js";
import { crestUserS,getMeInfoS } from "../services/usersS.js";

export async function crestUserC(req, res) {
  try {
    const body = req.body;
    if (!body || !body.username || !body.password) {
      return res
        .status(401)
        .send("To create user you most send username and password.");
    }
    const result = await crestUserS(body.username, body.password);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
}

export async function getMeInfoC(req, res) {
  try {
    const result = await getMeInfoS(req.headers.username);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
}
