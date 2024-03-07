import Joi from 'joi'

import validation from '../../../lib/middleware/validation'
import createHandler from '../../../lib/middleware/nextConnect'

import { SignupUser } from "../../../modules/user/user.service"

const postSchema = Joi.object({
    firstName: Joi.string().required().max(50),
    lastName: Joi.string().required().max(50),
    user: Joi.string().required().max(30),
    email: Joi.string().email().required().max(100),
    password: Joi.string().required().max(50).min(12),
})

const signup = createHandler()
.post( validation({body:postSchema}), async (req, res)=> {
    try{
        const user = await SignupUser(req.body)
        res.status(201).json(user)
    } catch (err){
        console.error(err)
        throw err
    }
    
})

export default signup