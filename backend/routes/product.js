import express from 'express';
import Product from '../models/product.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const product = await Product.find()
        res.json(product)
    } catch (err){
    res.status(500).json({message: err.message})
    }
});

// Fetch popular products
router.get('/popular', async (req, res) => {
    try{
        const popularProduct = await Product.find({popularity: 100}) 
        res.json(popularProduct)
    } catch (err){
        res.status(500).json({message: err.message})
    }
});

// Fetch produits phares
router.get('/produitPhare', async (req, res) => {
    try{
        const produitPhare = await Product.find({produitPhare: 1})
        res.json(produitPhare)
    } catch (err){
        res.status(500).json({message: err.message})
    }
});

export default router;