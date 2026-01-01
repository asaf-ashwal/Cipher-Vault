

import { createMessageS,getAllMessagesS,readMessageS } from "../services/messagesS.js";

export async function createMessageC(req, res) {
  try {
    if (!req.body || !req.body.message || !req.body.cipherType) {
      return res
        .status(401)
        .send(
          "To create message you most send message and cipherType in headers."
        );
    }
    const { message, cipherType } = req.body;
    const username = req.user;

    const result = await createMessageS(username, cipherType, message);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
}

export async function readMessageC(req, res) {
  try {
    if (!req.body || !req.body.message) {
      return res.status(401).send("To read message you most send message id.");
    }
    const result = await readMessageS(req.body.message);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
}
export async function getAllMessagesC(req, res) {
  try {
    const result = await getAllMessagesS(req.headers.username);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
}