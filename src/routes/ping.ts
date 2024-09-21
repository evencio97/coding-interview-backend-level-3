import { RouteList } from "../classes/RouteList";
import { Route } from "../classes/Route";
import { RouteMethod } from "../interfaces/interfaces";
import { pingGet } from "../handlers/ping/get";


const pingRoutes = new RouteList([
    new Route(
        RouteMethod.GET, 
        "/ping",
        pingGet
    )
]);

export { pingRoutes }