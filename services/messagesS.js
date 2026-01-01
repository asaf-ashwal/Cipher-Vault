import { insertMessage, getLast, findMessage, findMessages } from "../dl/message.js";
import { userCount } from "../dl/user.js";


// לעשות הצפנה
export async function createMessageS(username, cipher_type, text) {
  const encrypted_text = text;
  const newMessage = {
    username,
    encrypted_text,
    cipher_type,
  };
  await insertMessage(newMessage);
  await userCount(username);
  const messageData = await getLast();
  return messageData;
}


// להפוך מהצפנה
export async function readMessageS(id) {
  const res = await findMessage("id", Number(id));
  return res ? res : "Message not exist";
}

// להפוך מהצפנה
export async function getAllMessagesS(username) {
  const res = await findMessages("username",username);
  return {items:res} 
}