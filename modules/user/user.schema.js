import Joi from 'joi'

export const signupSchema = Joi.object({
    firstName: Joi.string().required().max(50).message('O campo "Nome" pode ter no máximo {{#limit}} caracteres'),
    lastName: Joi.string().required().max(50),
    user: Joi.string().required().max(30),
    email: Joi.string().email({ tlds:{allow:false}}).required().max(100),
    password: Joi.string().required().max(50).min(12).message('É necessário que sua senha contenha no mínimo{{#limit}} caracteres'),
})

