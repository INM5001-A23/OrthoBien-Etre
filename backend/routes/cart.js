import express from 'express';
import Cart from '../models/Panier.js';

const router = express.Router();

// Fetch all cart
router.get('/:cartid', async (req, res) => {
    try{
        const cartId = req.params.cartid;
        const cart = await Cart.findOne({cartid: cartId}, 'totalProducts')
        res.json(cart)
    } catch (err){
        res.status(500).json({message: err.message})
    }
});

// Fetch cart by cartid
router.get('/', async (req, res) => {
    try{
        const cart = await Cart.find()
        res.json(cart)
    } catch (err){
        res.status(500).json({message: err.message})
    }
    
});

export default router;