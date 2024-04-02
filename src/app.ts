import cors from 'cors';
import { BASE_ROUTES, BASE_URL } from './constants/url';
import healthCheckRouter from './routes/health-check.route';
import express from 'express';
import productRouter from './routes/product.route';

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

app.use(BASE_ROUTES.HEALTH_CHECK, healthCheckRouter);
app.use(BASE_ROUTES.PRODUCT, productRouter);

export { app };
