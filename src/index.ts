import { app } from './app';
import { connectToMongoDB } from './models';

const PORT = process.env.PORT || 9000;

const start = async () => {
    try {
        await connectToMongoDB();
        app.listen(PORT, () => {
            console.log(
                '\x1b[32m%s\x1b[0m',
                '-----------------------------------------------------------------------'
            );
            console.log('\x1b[32m%s\x1b[0m', `API listening on PORT: ${PORT}`);
            console.log(
                '\x1b[32m%s\x1b[0m',
                '-----------------------------------------------------------------------'
            );
        });
    } catch (error) {
        console.error("Connection error", error);
        process.exit(1);
    }
};

start();
