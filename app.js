import express from "express";
import { insert } from "./dl/message.js";
import { insertUser } from "./dl/user.js";
import { crestUserC } from "./controllers/usersC.js";
import messageR from "./routes/messages.js";
import userR from "./routes/useres.js";
// import { up } from './services/messagesS.js';

// up()
const app = express();
const port = 3000;

app.use(express.json());
app.use("/messages", messageR);
app.use("/users", userR);

app.post("/test", async (req, res) => {
  const message = {
    username: "asaf",
    encrypted_text: "attack at dawn",
    cipher_type: "reverse",
  };

  const result = await insert(message);
  res.send(result);
});

app.post("/auth/register", crestUserC);


app.listen(port, () => {
  console.log(`server runing on port ${port}`);
});
// const mongoC = await dbConnection();
// console.log("mongoC: ", mongoC);

// router
// content (string)
// ● createdAt (date)
// ● updatedAt (date)

// const message = {
//   userId: "9e073be5-2480-4fda-a60d-a18bd89b7742",
//   username: "asaf",
// content,
// createdAt,
// updatedAt
// };

// const data = awai

// -- Work --
// const {data,error} = await supabase.from('users').insert({username:'asaf',password:'12345'})
// const {data,error} = await supabase.from('users').select()
// console.log(error);
// console.log(data);
