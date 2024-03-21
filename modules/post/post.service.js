import Post from './post.model'

export const createPost = async (body, user) => {
    return await Post.create({
        text: body.text,
        createdDate: new Date(),
        createdBy: user.id
    })
}

export const getPosts = async(limit = 20) =>{

    return await Post.find()
        .populate('createdBy', 'user')
        .sort({ createdDate: -1})
        .limit(limit)
}


export const deletePost = async (id, user) => {
    const deletedPost = await Post.findOneAndDelete({
        _id: id,
        createdBy: user.id
    })
    return deletedPost;
}

export const editPost = async (body, user) => {
    return Post.findByIdAndUpdate({
        _id:body.id,
        createdBy:user.id
    }, {
        text:body.text
    },{
        new:true
    }
    )
}