import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    nom: String
  }
);

export default mongoose.model('Categories', categorySchema, 'Categories');