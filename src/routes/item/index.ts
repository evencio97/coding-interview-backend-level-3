import { Server } from "@hapi/hapi"
import Create from "./create"
import Update from "./update"
import Remove from "./remove"
import Get from "./get"
import GetAll from "./getAll"


export default (server: Server) => {
    // Define each route
    Create.define(server);
    Update.define(server);
    Remove.define(server);
    Get.define(server);
    GetAll.define(server);
}