import express from "express";
import aout from "../midel/aout.js";
import { createMessageC, getAllMessagesC, readMessageC } from "../controllers/messagesC.js";
const router = express.Router();


router.post('/encrypt',aout, createMessageC)
router.post('/decrypt',aout, readMessageC)

router.get('/', aout, getAllMessagesC)



export default router;
