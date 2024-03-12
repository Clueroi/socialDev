import Joi from 'joi'

export const signupSchema = Joi.object({
    firstName: Joi.string().required().max(50) .message('O campo "Nome" pode ter no máximo {{#limit}} caracteres'),
    lastName: Joi.string().required().max(50),
    user: Joi.string().required().max(30),
    email: Joi.string().email({ tlds:{allow:false}}).required().max(100).message('Necessário que seja um e-mail válido'),
    password: Joi.string().required().max(50).min(8).message('É necessário que sua senha contenha no mínimo {{#limit}} caracteres'),
})

export const loginSchema = Joi.object({
    userOrEmail: Joi.string().required(),
    password: Joi.string().required()
    .max(50) .message('O campo "Senha" pode ter no máximo {{#limit}} caracteres')
    .min(6) .message('O campo "Senha" pode ter no Minimo {{#limit}} caracteres'),
})