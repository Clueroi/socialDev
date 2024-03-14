import {withIronSessionApiRoute} from 'iron-session/next'

import createHandler from "../../../lib/middleware/nextConnect";
import validation from "../../../lib/middleware/validation";
import { ironConfig } from "../../../lib/middleware/ironSession";

import { createPostSchema } from '../../../modules/post/post.schema';
import { createPost, getPosts } from '../../../modules/post/post.service';

const handler = createHandler()

handler
.post(validation({body: createPostSchema}), async(req, res) =>{
    try{
        if(!req.session.user) return res.status(401).send()
        const newPost = await createPost(req.body, req.session.user)
        res.status(201).send(newPost)
    } catch(err){
        return res.status(500).send(err.message)
        
    }
})
.get(async(req, res) => {
    try{
        if(!req.session.user) return res.status(401).send()

        const posts = await getPosts()
        res.status(200).send(posts)
    } catch(err){
        return res.status(500).send(err.message)
    }
})


export default withIronSessionApiRoute(handler, ironConfig)