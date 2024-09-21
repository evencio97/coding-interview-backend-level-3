import Joi from "joi";


const validations = {
    name: Joi.string(),
    price: Joi.number().min(0).messages({
        'number.min': '"price" cannot be negative',
    }),
    paramsItemId: Joi.object({
        itemId: Joi.number().integer().required()
    }).options({ stripUnknown: true })
}

export { validations }