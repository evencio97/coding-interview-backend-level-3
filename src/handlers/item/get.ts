import Boom from "@hapi/boom";
import { Item } from "../../models/Item";
import { ItemErrors } from "../../interfaces/itemErrors";
import { RouteHandler } from "../../interfaces/interfaces";


const itemGet: RouteHandler = async (request, h) => {
    const itemId = parseInt(request.params.itemId);
    const result = await Item.findOne({ id: itemId }).exec();
    if (!result)
        throw Boom.notFound(ItemErrors.NOT_FOUND.valueOf());

    return result.toObject();
}

export { itemGet };