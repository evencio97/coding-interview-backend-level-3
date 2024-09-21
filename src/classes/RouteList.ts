import { Server } from "@hapi/hapi";
import { Route } from "./Route";


class RouteList {
    list: Route[];

    constructor(list: Route[]) {
        this.list = list;
    }

    defineAll(server: Server) {
        for (const route of this.list) {
            server.route({
                method: <any>route.method.valueOf(),
                path: route.path,
                handler: route.handler,
                options: route.options
            });
        }
    }
}

export {
    RouteList
}