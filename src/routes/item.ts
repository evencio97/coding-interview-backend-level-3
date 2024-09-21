import Joi from "joi"
import { Route } from "../classes/Route"
import { RouteList } from "../classes/RouteList"
import { validations } from "../validations/item"
import { RouteMethod } from "../interfaces/interfaces"
import { itemCreate } from "../handlers/item/create"
import { itemUpdate } from "../handlers/item/update"
import { itemRemove } from "../handlers/item/remove"
import { itemGet } from "../handlers/item/get"
import { itemGetAll } from "../handlers/item/getAll"


const itemRoutes = new RouteList([
    new Route(
        RouteMethod.POST, 
        "/items",
        itemCreate,
        {
            validate: {
                payload: Joi.object({
                    name: validations.name.required(),
                    price: validations.price.required()
                }).options({ stripUnknown: true })
            }
        }
    ),
    new Route(
        RouteMethod.PUT,
        "/items/{itemId}",
        itemUpdate,
        {
            validate: {
                payload: Joi.object({
                    name: validations.name,
                    price: validations.price
                }).options({ stripUnknown: true }),
                params: validations.paramsItemId,
            }
        }
    ),
    new Route(
        RouteMethod.DELETE,
        "/items/{itemId}",
        itemRemove,
        {
            validate: {
                params: validations.paramsItemId
            }
        }
    ),
    new Route(
        RouteMethod.GET,
        "/items/{itemId}",
        itemGet,
        {
            validate: {
                params: validations.paramsItemId
            }
        }
    ),
    new Route(
        RouteMethod.GET,
        "/items",
        itemGetAll
    )
]);

export { itemRoutes }