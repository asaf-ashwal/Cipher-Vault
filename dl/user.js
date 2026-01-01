import dbConnection from "../db/mongo.js";

const connection = await dbConnection();
// const collection =

export async function insertUser(user) {
  const result = await connection.collection("users").insertOne(user);
  return result;
}
export async function getUser(username) {
  const result = await connection.collection("users").findOne(username);
  return result;
}


export async function aoutDl(username,password) {
  const result = await connection.collection("users").findOne({username,password});
  return result;
}

export async function userCount(username) {
    await connection.collection("users").updateOne({username},{$inc:{encryptedMessagesCount:+1}},{new:true});
}


export async function getMe(username) {
  const result = await connection.collection("users").findOne({username});
  return result;
}