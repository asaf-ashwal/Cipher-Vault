import {
  insertMessage,
  getLast,
  findMessage,
  findMessages,
} from "../dl/message.js";
import { userCount } from "../dl/user.js";

export async function createMessageS(username, cipher_type, text) {
  const encrypted_text = ciphers(cipher_type, text);
  const newMessage = {
    username,
    encrypted_text,
    cipher_type,
  };
  await insertMessage(newMessage);
  await userCount(username);
  const messageData = await getLast();
  return {
    id: messageData.id,
    cipherType: messageData.cipher_type,
    encryptedText: messageData.encrypted_text,
  };
}

export async function readMessageS(id) {
  const res = await findMessage("id", Number(id));

  res.encrypted_text = unciphers(res.cipher_type, res.encrypted_text);
  return res ? res : "Message not exist";
}

export async function getAllMessagesS(username) {
  const results = await findMessages("username", username);
  const newResult = results.map((msg) => {
    return {
      ...msg,
      encrypted_text: unciphers(msg.cipher_type, msg.encrypted_text),
    };
  });
  return { items: newResult };
}

function ciphers(cipher_type, text) {
  if (cipher_type == "REVERSE") {
    return text.toUpperCase().split("").reverse().join("");
  } else if (cipher_type == "ATBASH") {
    return text;
  } else if (cipher_type == "ATBASH") {
    return text;
  }
}

function unciphers(cipher_type, text) {
  if (cipher_type == "REVERSE") {
    return text.toLowerCase().split("").reverse().join("");
  } else if (cipher_type == "ATBASH") {
    return text;
  } else if (cipher_type == "ATBASH") {
    return text;
  } else {
    return text;
  }
}
