import Joi from "joi";
import { Route, RouteHandler, RouteMethod } from "../../classes/Route";
import { IItem, Item } from "../../models/Item";
import { validations } from "../../validations/item";


const handler: RouteHandler = async (request, h) => {
    const payload = <IItem> request.payload;
    const item = (await Item.create([{
        name: payload.name,
        price: payload.price,
        /**
         * I know it is not the best solution this was just a quick temporal fix,
         * i realized that the id property needs to be a number after finishing the code using MongoDB
        */
        id: Date.now()
    }]))[0];
    
    return h.response(item.toObject()).code(201);
}

export default new Route(
    RouteMethod.POST, "/items", handler,
    {
        validate: {
            payload: Joi.object({
                name: validations.name.required(),
                price: validations.price.required()
            }).options({ stripUnknown: true })
        }
    }
);