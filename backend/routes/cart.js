import express from 'express';
import Cart from '../models/Panier.js';
import axios from "axios";


const router = express.Router();

// by userid
router.get("/:clientid", async (req, res) => {
  const clientid = req.params.clientid;
  
  try {
    const cart = await Cart.findOne({ 'client.infosClient': clientid });
  if (cart && cart.articles.length > 0) {
    console.log(cart)
    res.json(cart);
  } else {
    res.send(null);
  }
  } catch (error) {
      res.status(500).send();
  }
  });

// Fetch cart by cartid
router.get('/:cartid', async (req, res) => {
    try{
        const cartId = req.params.cartid;
        const cart = await Cart.findOne({cartid: cartId}, 'totalProducts')
        res.json(cart)
    } catch (err){
        res.status(500).json({message: err.message})
    }
});

// Fetch all cart
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