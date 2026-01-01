import express from "express";
import aout from "../midel/aout.js";
import { getMeInfoC } from "../controllers/usersC.js";

const router = express.Router();

router.get('/me', aout, getMeInfoC)



export default router;
