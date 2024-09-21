import { Server } from "@hapi/hapi"
import { pingRoutes } from "./ping"
import { itemRoutes } from "./item";


export const defineRoutes = (server: Server) => {
    // Define routes
    [pingRoutes, itemRoutes].forEach(e => e.defineAll(server));
}