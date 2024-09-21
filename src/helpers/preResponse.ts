import { Request, ResponseToolkit } from "@hapi/hapi";
import { Boom } from "@hapi/boom";
import { mongo } from "mongoose";


const preResponse = (request: Request, h: ResponseToolkit) => {
    // Check if error
    if (!(<Boom>request.response).isBoom && (request.response instanceof mongo.MongoServerError || request.response instanceof Error)) {
        const error = <mongo.MongoServerError | Error | Boom> request.response;
        if (error instanceof mongo.MongoServerError)
            console.error(error.toString());
        else
            console.error(error.stack? error.stack : error);
    }

    return h.continue
}

export { preResponse };