import { RouteHandler } from "../../interfaces/interfaces";
import { Item } from "../../models/Item";


const itemGetAll: RouteHandler = async (request, h) => {
    // The .map to conver each element to objects was need to pass the assert in
    // the line 50 of the index.test.ts. In other case this will not be needed
    const results = (await Item.find().exec()).map(e => e.toObject());
    return results;
}

export { itemGetAll };