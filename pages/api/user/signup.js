
import {withIronSessionApiRoute} from 'iron-session/next'

import validation from '../../../lib/middleware/validation'
import createHandler from '../../../lib/middleware/nextConnect'

import { SignupUser } from "../../../modules/user/user.service"
import { ironConfig } from "../../../lib/middleware/ironSession";
import { signupSchema } from '../../../modules/user/user.schema'

const signup = createHandler()
.post( validation({body:signupSchema}), async (req, res)=> {
    try{
        const user = await SignupUser(req.body)
        req.session.user = {
            id: user._id,
            user: user.user
        }
        await req.session.save()

        res.status(201).json({ok: true})
    } catch (err){
        if(err.code === 11000){
            return res.status(400).send({ 
                code:11000,
                duplicatedKey:Object.keys(err.keyPattern)[0]
            })
        }
        throw err
    }
    
})

export default withIronSessionApiRoute(signup, ironConfig)