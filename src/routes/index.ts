import { Server } from "@hapi/hapi"
import ping from "./ping"
import item from "./item"


export default (server: Server) => {
    // Define PING routes
    ping(server);
    // Define PING routes
    item(server);
}