import Hapi from '@hapi/hapi'
import { defineRoutes } from './routes'
import { preResponse } from './helpers/preResponse';
import { postResponse } from './helpers/postResponse';
import { connectDB } from './database/mongodb';
import { handleValidationErrors } from './helpers/handleValidationErrors';


const getServer = () => {
    const server = Hapi.server({
        host: 'localhost',
        port: 3000,
        routes: {
            validate: {
                failAction: handleValidationErrors,
                options: {
                    abortEarly: false
                }
            }
        }
    });
    // For error handling purposes
    server.ext('onPreResponse', preResponse);
    server.ext('onPostResponse', postResponse);
    // Define routes
    defineRoutes(server);

    return server;
}

export const initializeServer = async () => {
    const server = getServer()
    await server.initialize()
    await connectDB();
    return server
}

export const startServer = async () => {
    const server = getServer()
    await server.start()
    console.log(`Server running on ${server.info.uri}`)
    return server
};