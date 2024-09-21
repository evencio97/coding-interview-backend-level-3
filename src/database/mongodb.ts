import mongoose from 'mongoose';


mongoose.set('strictQuery', false);
mongoose.set('toObject', { virtuals: true });
mongoose.set('toJSON', { virtuals: true });
mongoose.connection.on('connected', () => console.log("Mongo database connected"));

export const connectDB = async () => {
    return mongoose.connect("mongodb://localhost:27017/eldoradotest");
}
