import express from 'express';
import Cart from '../models/Panier.js';


const router = express.Router();

//get cart by userid
router.get("/:clientid", async (req, res) => {
  const clientid = req.params.clientid;
  
  try {
    const cart = await Cart.findOne({ 'client.infosClient': clientid });
    if (cart && cart.articles.length > 0) {
      res.json(cart);
    } else {
      res.json({ articles: [] }); // Send an empty array if cart is null or empty
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).send();
  }
});

  // Clear cart 
  router.put('/clear/:cartid', async (req, res) => {
    const cartId = req.params.cartid;
    console.log('Cart to clear: ' + cartId);
    
    try{
      const clearCart = await Cart.findOne({'client.infosClient': cartId});
      console.log('Cart to clear: ' + clearCart);

      if (clearCart && clearCart.articles.length > 0) {
        clearCart.articles = [];
        clearCart.nombreArticles = 0;
        clearCart.montantAvantTaxes = 0.00;
    
        await clearCart.save();
          res
            .status(200)
            .json({ message: "Le panier a été vidé avec succès!" });
        } else {
          res.status(404).json({ message: "Ce panier n'existe pas" });
        }
    } catch(error){
      console.log(error);
      res.status(500).json({error});
    }
  });

  // Update cart with userID
  router.put('/update/:userid', async (req, res) => {
    const userId = req.params.userid;
    const newCart = req.body;

    try {
      const updateCart = await Cart.findOneAndUpdate(
        { 'client.infosClient': userId },
        {
          $set: {
            articles: newCart.articles,
            nombreArticles: newCart.nombreArticles,
            montantAvantTaxes: newCart.montantAvantTaxes,
          },
        },
        { new: true } // Return the updated document
      );
  
      if (updateCart) {
        res.json(updateCart);
      } else {
        res.status(404).json({ message: "Ce panier n'existe pas" });
      }
    } catch (error) {
      console.error('Error updating cart:', error);
      res.status(500).json({ error });
    }
  });

// Fetch cart by cartid
router.get('/:cartid', async (req, res) => {
  try{
      const cartId = req.params.cartid;
      const cart = await Cart.findOne({cartid: cartId}, 'totalProducts');
      res.json(cart);
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