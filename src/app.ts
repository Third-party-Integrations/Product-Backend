import cors from 'cors';
import { BASE_ROUTES, BASE_URL } from './constants/url';
import healthCheckRouter from './routes/health-check.route';
import express, { Request, Response } from 'express';
import { db } from './models';
import productRouter from './routes/product.route';
const UserModel = db.user

const app = express();

const corsOptions = {
    origin: '*',
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get(BASE_URL, (req: any, res: any) => {
    res.json({ message: 'Welcome!' });
});

app.use(BASE_ROUTES.PRODUCT,  productRouter);

app.delete('/v1/product/api/delete-product/:productId', async (req: Request, res: Response) => {
    try {
        const productId = req.params.productId;
        const deletedProduct = await UserModel.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/v1/product/api/product/:productId', async (req, res) => {
    try {
        const productId = req.params.productId;

        console.log(req.params.productId);

        const product = await UserModel.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        console.error("Error finding product:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.use(BASE_ROUTES.HEALTH_CHECK, healthCheckRouter);


export { app };
