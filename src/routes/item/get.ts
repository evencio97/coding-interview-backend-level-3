import Boom from "@hapi/boom";
import { Route, RouteHandler, RouteMethod } from "../../classes/Route";
import { Item } from "../../models/Item";
import { ItemErrors } from "../../interfaces/itemErrors";
import { validations } from "../../validations/item";


const handler: RouteHandler = async (request, h) => {
    const itemId = parseInt(request.params.itemId);
    const result = await Item.findOne({ id: itemId }).exec();
    if (!result)
        throw Boom.notFound(ItemErrors.NOT_FOUND.valueOf());

    return result.toObject();
}

export default new Route(
    RouteMethod.GET, "/items/{itemId}", handler,
    {
        validate: {
            params: validations.paramsItemId
        }
    }
);