import { startServer } from "./server";
import { connectDB } from './database/mongodb';


process.on('unhandledRejection', (err) => {
    console.error(err)
    process.exit(1)
})

const init = async () => {
    try {
        await connectDB();
        await startServer();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

init();