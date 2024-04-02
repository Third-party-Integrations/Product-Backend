import mongoose from 'mongoose';
import productSchema from './user.model';

mongoose.Promise = global.Promise;

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL); //replace db url
        console.log("Successfully connected to MongoDB.");
    } catch (error) {
        console.error("Connection error", error);
        process.exit(1);
    }
};

const db: any = {
    mongoose,
    user: productSchema
};

export { db, connectToMongoDB };
