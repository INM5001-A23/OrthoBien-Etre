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

//Fetch in order of higher price
router.get("/grandprix", async (req, res) => {
  try {
    const query = {};
    const sort = { prix: -1 };
    const produitPhare = await Produits.find(query).sort(sort);
    res.json(produitPhare);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Fetch in order of lower price
router.get("/petitprix", async (req, res) => {
  try {
    const query = {};
    const sort = { prix: 1 };
    const produitPhare = await Produits.find(query).sort(sort);
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

<<<<<<< HEAD
//  // Fetch products by category
//  router.get("/:codeCategorie", async (req, res) => {
//   try {
//     const codeCategorie = req.params.codeCategorie;
//     const produit = await Produits.find({ codeCategorie });
//     res.json(produit);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });
||||||| 71473aa

=======
>>>>>>> 538c1536f46b2512df219101c8dc67a853b0c215
export default router;
