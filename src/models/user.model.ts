import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  product_name: String,
  product_features: String,
  product_description: String,
  product_images: [String], 
  product_category: String,
  product_subcategory: String,
  product_brand: String,
  product_publish_date: Date
});

const ProductModel = mongoose.model('Product', productSchema);

export default ProductModel;
