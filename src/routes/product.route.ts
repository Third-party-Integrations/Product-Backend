import express from 'express';
import { ROUTES } from '../constants/url';
import { handleCreateProduct, handleGetProductsData, handleUpdateProduct } from '../controllers/product.controller';

const productRouter = express.Router();

productRouter.post(ROUTES.SUBMIT_FORM, handleCreateProduct);
productRouter.get(ROUTES.API_GET_FROM_DATA, handleGetProductsData);
productRouter.put(ROUTES.UDATE_PRODUCT, handleUpdateProduct);

export default productRouter;
