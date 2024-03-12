import Joi from "joi";
import {withIronSessionApiRoute} from 'iron-session/next'

import createHandler from "../../../lib/middleware/nextConnect";
import validation from "../../../lib/middleware/validation";
import { login } from "../../../modules/user/user.service";

import { ironConfig } from "../../../lib/middleware/ironSession";

import { loginSchema } from "../../../modules/user/user.schema";

const handler = createHandler()

handler.post(validation({body: loginSchema}), async (req, res)=>{
    try{
        const user = await login(req.body)
        req.session.user = {
            id: user._id,
            user: user.user
        }
        await req.session.save()
        res.send({ ok: true})
    }catch(err){
        console.error(err)
        return res.status(400).send(err.message)
    }
})

export default withIronSessionApiRoute(handler, ironConfig)