import mongoose from 'mongoose';
import productSchema from './user.model';

mongoose.Promise = global.Promise;

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://kshirsagarram253:BE2T4bFbps9Gp0W6@cluster0.le0uzhj.mongodb.net/`); //replace db url
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
