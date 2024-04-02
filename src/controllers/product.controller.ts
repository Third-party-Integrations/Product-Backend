
import { NextFunction, Request, Response } from 'express';
import { createProduct, deleteProduct, getProduct, getProductsData, updateProduct } from '../service/product.service';

export const handleCreateProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const response = await createProduct(req);
        res.status(200).json(response);
    } catch (ex) {
        next(ex);
    }
};

export const handleGetProductsData = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const response = await getProductsData(req);
        res.status(200).json(response);
    } catch (ex) {
        next(ex);
    }
};

export const handleUpdateProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const response = await updateProduct(req);
        res.status(200).json(response);
    } catch (ex) {
        res.status(500).json({ message: 'Internal server error' });
        next(ex);
    }
};

export const handleDeleteProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const response = await deleteProduct(req);
        res.status(200).json(response);
    } catch (ex) {
        res.status(500).json({ message: 'Internal server error' });
        next(ex);
    }
};

export const handleGetProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const response = await getProduct(req);
        res.status(200).json(response);
    } catch (ex) {
        res.status(500).json({ message: 'Internal server error' });
        next(ex);
    }
};