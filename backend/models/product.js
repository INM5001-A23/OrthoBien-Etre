import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    code: String,
    nom: String,
    Description: String,
    Promotion: Number,
    price: Number,
    imageListId: String,
    mainImageURL: String,
    popularity: Number,
    produitPhare: Number,
    note: Number
  }
);

export default mongoose.model('Product', productSchema);