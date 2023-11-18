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

router.post('/add', async (req, res) => {
    try {
      const user = req.user._id;
      const items = req.body.products;

      console.log(user);
      console.log(items);
  
      const cartDoc = await cart.save();
  
    } catch (error) {
      res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
      });
    }
  });

export default router;