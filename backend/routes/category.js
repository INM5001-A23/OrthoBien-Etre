import express from 'express';
import Categories from '../models/Categories.js';

const router = express.Router();

// Fetch all categories
router.get('/', async (req, res) => {
  try{
    const categories = await Categories.find({})
    res.json(categories)
  } catch(err){
    res.status(500).json({message: err.message})
  }
});

router.get('/:id', async (req, res) => {
  try{
    const categorieid = req.params.id;
        const cart = await Categories.findOne({id: categorieid}, 'nom').exec();
        res.json(cart)
  } catch(err){
    res.status(500).json({message: err.message})
  }
});


export default router;