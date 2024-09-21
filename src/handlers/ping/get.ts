import { RouteHandler } from "../../interfaces/interfaces";


const pingGet: RouteHandler = async (request, h) => {
    return {
        ok: true
    }
}

export { pingGet };