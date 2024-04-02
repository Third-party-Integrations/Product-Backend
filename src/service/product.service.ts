import { db } from "../models";
const UserModel = db.user

export const createProduct = async (req: any) => {
    try {
        const formData = req.body;
        const newFormEntry = new UserModel(formData);
        await newFormEntry.save();
        return { message: 'Form submitted successfully', success: true };
    } catch (error) {
        console.error("Error submitting form:", error);
        return { message: "Error submitting form:", error, success: false };
    }
};

export const getProductsData = async (req: any) => {
    try {
        const formData = await UserModel.find();
        return formData
    } catch (error) {
        console.error("Error fetching form data:", error);
        return { message: 'Internal server error' };
    }
};

export const updateProduct = async (req: any) => {
    try {
        const productId = req.params.productId;
        const updateData = req.body;
        const updatedProduct = await UserModel.findByIdAndUpdate(productId, updateData, { new: true });
        if (!updatedProduct) {
            return { message: 'Product not found' };
        }
        return updatedProduct
    } catch (error) {
        console.error("Error updating product:", error);
        return { message: 'Internal server error' };
    }
};