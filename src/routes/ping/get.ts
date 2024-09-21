import { Route, RouteHandler, RouteMethod } from "../../classes/Route";


const handler: RouteHandler = async (request, h) => {
    return {
        ok: true
    }
}

export default new Route(RouteMethod.GET, "/ping", handler);