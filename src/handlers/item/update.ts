import Boom from "@hapi/boom";
import { IItem, Item } from "../../models/Item";
import { ItemErrors } from "../../interfaces/itemErrors";
import { RouteHandler } from "../../interfaces/interfaces";


const itemUpdate: RouteHandler = async (request, h) => {
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

export { itemUpdate }