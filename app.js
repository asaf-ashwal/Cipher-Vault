import express from "express";
import { insertUser, userCount } from "./dl/user.js";
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



app.post("/auth/register", crestUserC);




app.listen(port, () => {
  console.log(`server runing on port ${port}`);
});