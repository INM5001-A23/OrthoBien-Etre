import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    cartid: String,
    ProductListId: String,
    totalProducts: Number,
    subTotalPrice: Number,
    taxes: Number,
    shippingFees: Number,
    totalPrice: Number
});

export default mongoose.model('Cart', cartSchema);
