import { RouteOptions } from "@hapi/hapi";
import { RouteHandler, RouteMethod } from "../interfaces/interfaces";


class Route {
    method: RouteMethod;
    path: string;
    handler: RouteHandler;
    options: RouteOptions;

    constructor(method: RouteMethod, path: string, handler: RouteHandler, options: RouteOptions = {}) {
        this.method = method;
        this.path = path;
        this.handler = handler;
        this.options = options;
    }
}

export {
    Route
}