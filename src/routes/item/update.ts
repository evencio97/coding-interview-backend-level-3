import Joi from "joi";
import Boom from "@hapi/boom";
import { Route, RouteHandler, RouteMethod } from "../../classes/Route";
import { IItem, Item } from "../../models/Item";
import { ItemErrors } from "../../interfaces/itemErrors";
import { validations } from "../../validations/item";


const handler: RouteHandler = async (request, h) => {
    const itemId = parseInt(request.params.itemId);
    const payload = <IItem> request.payload;
    if (!(payload.name || payload.price))
        throw Boom.badRequest();
    const ops = Object();
    if (payload.name)
        ops.name = payload.name;
    if (payload.price)
        ops.price = payload.price;
        
    const result = await Item.findOneAndUpdate(
        { id: itemId },
        { $set: ops},
        { new: true }
    ).exec();
    if (!result)
        throw Boom.notFound(ItemErrors.NOT_FOUND.valueOf());

    return result.toObject();
}

export default new Route(
    RouteMethod.PUT, "/items/{itemId}", handler,
    {
        validate: {
            payload: Joi.object({
                name: validations.name,
                price: validations.price
            }).options({ stripUnknown: true }),
            params: validations.paramsItemId,
        }
    }
);