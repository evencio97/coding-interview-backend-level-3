import Boom from "@hapi/boom";
import { Item } from "../../models/Item";
import { ItemErrors } from "../../interfaces/itemErrors";
import { RouteHandler } from "../../interfaces/interfaces";


const itemRemove: RouteHandler = async (request, h) => {
    const itemId = parseInt(request.params.itemId);
    // Delete
    if (!(await Item.deleteOne({id: itemId}).exec())?.deletedCount)
        throw Boom.notFound(ItemErrors.NOT_FOUND.valueOf());

    return h.response().code(204);
}

export { itemRemove };