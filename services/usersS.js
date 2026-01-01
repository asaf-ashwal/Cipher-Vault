import { getUser, insertUser } from "../dl/user.js";

export async function crestUserS(username, password) {
  const isExist = await getUser({username});
  if (isExist) throw "user alrady exist";
  const newUser = {
    username,
    password,
    encryptedMessagesCount: 0,
    createdAt: new Date(),
  };
  const res = await insertUser(newUser);
  return res.insertedId ? { username, id: res.insertedId } : "error";
}
