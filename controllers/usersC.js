import { crestUserS } from "../services/usersS.js";

export async function crestUserC(req,res) {
    // { "message": "attack at dawn", "cipherType": "reverse" }
    const body =req.body; 
    if (!body||!body.username||!body.password) {
        return res.status(401).send('To create user you most send username and password.')
    }
    const result = await crestUserS(body.username,body.password)
    res.send(result)
}