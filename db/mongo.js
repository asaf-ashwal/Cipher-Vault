import { config } from "dotenv";
import { Db, MongoClient } from "mongodb";

config();
let db;

const client = new MongoClient(process.env.DB_CONNECTION);

// export db
/**
 *
 * @returns {Promise<Db>}
 */
async function dbConnection() {
  try {
    if (!db) {
      await client.connect();
      // to chenge
      db = client.db("Cipher_Vault");
      console.log("mongo connected");
    }
    return db;
  } catch (error) {
    console.log(error);
  }
}



export default dbConnection;
