import connect from 'next-connect'
import Joi from 'joi'

import validation from '../../../lib/middleware/validation'

import { SignupUser } from "../../../modules/user/user.service"

const postSchema = Joi.object({
    firstName: Joi.string().required().max(50),
    lastName: Joi.string().required().max(50),
    User: Joi.string().required().max(30),
    email: Joi.string().email().required().max(100),
    password: Joi.string().required().max(50).min(12),
})

const signup = connect()
.post( validation({body:postSchema}),(req, res)=> {
    SignupUser(req.body)
    res.status(200).json({ Teste: 'ok'})
})

export default signup