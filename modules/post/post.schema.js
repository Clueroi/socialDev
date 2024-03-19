import Joi from 'joi'
import joiObjectid from 'joi-objectid'

Joi.objectid = joiObjectid(Joi)

export const createPostSchema = Joi.object({
    text: Joi.string().required().max(256)
})

export const deletePostSchema = Joi.object({
    id: Joi.objectid().required()
})

export const editPostSchema = Joi.object({
    id: Joi.objectid().required(),
    text: Joi.string().required().max(256)
})