import cors from 'cors';
import { BASE_ROUTES, BASE_URL } from './constants/url';
import healthCheckRouter from './routes/health-check.route';
import express, { Request, Response } from 'express';
import { db } from './models';
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

app.post('/api/submit-form', async (req: Request, res: Response) => {
    try {
        const formData = req.body;
        const newFormEntry = new UserModel(formData);
        await newFormEntry.save();
        res.status(201).json({ message: 'Form submitted successfully' });
    } catch (error) {
        console.error("Error submitting form:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/api/get-form-data', async (req: Request, res: Response) => {
    try {
        const formData = await UserModel.find();
        res.status(200).json(formData);
    } catch (error) {
        console.error("Error fetching form data:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.put('/api/update-product/:productId', async (req: Request, res: Response) => {
    try {
        const productId = req.params.productId;
        const updateData = req.body;
        const updatedProduct = await UserModel.findByIdAndUpdate(productId, updateData, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.delete('/api/delete-product/:productId', async (req: Request, res: Response) => {
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

app.get('/api/product/:productId', async (req, res) => {
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
