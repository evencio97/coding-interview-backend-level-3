import { Server } from "@hapi/hapi"
import Get from "./get"


export default (server: Server) => {
    // Define each route
    Get.define(server);
}