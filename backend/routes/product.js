import express from "express";
import Produits from "../models/Produits.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const produit = await Produits.find({});
    res.json(produit);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});




// Fetch products in promotion
router.get("/promotion", async (req, res) => {
  try {
    const popularProduct = await Produits.find({ promotion: true });
    res.json(popularProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Fetch popular products
router.get("/popular", async (req, res) => {
  try {
    const popularProduct = await Produits.find({ popularity: 100 });
    res.json(popularProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
 
});

// Fetch produits phares
router.get("/produitPhare", async (req, res) => {
  try {
    const produitPhare = await Produits.find({ produitPhare: 1 });
    res.json(produitPhare);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Fetch product
router.get("/:codeProduit", async (req, res) => {
  try {
    const codeProduit = req.params.codeProduit;
    const produit = await Produits.findOne({ codeProduit });
    if (!produit) {
      res.status(404).json({ message: "Product not found." });
      return;
    }
    res.json(produit);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


export default router;
