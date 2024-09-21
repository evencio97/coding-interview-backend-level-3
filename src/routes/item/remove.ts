import Boom from "@hapi/boom";
import { Route, RouteHandler, RouteMethod } from "../../classes/Route";
import { Item } from "../../models/Item";
import { ItemErrors } from "../../interfaces/itemErrors";
import { validations } from "../../validations/item";


const handler: RouteHandler = async (request, h) => {
    const itemId = parseInt(request.params.itemId);
    // Delete
    if (!(await Item.deleteOne({id: itemId}).exec())?.deletedCount)
        throw Boom.notFound(ItemErrors.NOT_FOUND.valueOf());

    return h.response().code(204);
}

export default new Route(
    RouteMethod.DELETE, "/items/{itemId}", handler,
    {
        validate: {
            params: validations.paramsItemId
        }
    }
);