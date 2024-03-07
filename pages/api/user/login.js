import Joi from "joi";

import createHandler from "../../../lib/middleware/nextConnect";
import validation from "../../../lib/middleware/validation";
import { login } from "../../../modules/user/user.service";

const loginSchema = Joi.object({
    userOrEmail: Joi.string().required(),
    password: Joi.string().required()
})

const handler = createHandler()

handler.post(validation({body: loginSchema}), async (req, res)=>{
    try{
        const user = await login(req.body)
        res.send(user)
    }catch(err){
        console.error(err)
    }
})

export default handler