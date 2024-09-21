import { Server, RouteOptions } from "@hapi/hapi";
import { RouteHandler, RouteMethod } from "../interfaces/interfaces";


class Route {
    private method: RouteMethod;
    private path: string;
    private handler: RouteHandler;
    private options: RouteOptions;

    constructor(method: RouteMethod, path: string, handler: RouteHandler, options: RouteOptions = {}) {
        this.method = method;
        this.path = path;
        this.handler = handler;
        this.options = options;
    }

    define(server: Server) {
        server.route({
            method: <any>this.method.valueOf(),
            path: this.path,
            handler: this.handler,
            options: this.options
        });
    }
}

export {
    RouteMethod, RouteHandler, Route
}