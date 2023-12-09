import express from "express";
import Produits from "../models/Produits.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const produits = await Produits.aggregate().lookup({
      from: "Images",
      localField: "codeProduit",
      foreignField: "codeProduit",
      as: "images",
    });
    res.json(produits);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Fetch products in promotion
router.get("/promotion", async (req, res) => {
  try {
    const popularProduct = await Produits.aggregate()
      .lookup({
        from: "Images",
        localField: "codeProduit",
        foreignField: "codeProduit",
        as: "images",
      })
      .match({ promotion: true });
    res.json(popularProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Fetch popular products
router.get("/populaire", async (req, res) => {
  try {
    const popularProduct = await Produits.aggregate()
      .lookup({
        from: "Images",
        localField: "codeProduit",
        foreignField: "codeProduit",
        as: "images",
      })
      .match({ populaire: true });
    res.json(popularProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Fetch produits phares
router.get("/produitPhare", async (req, res) => {
  try {
    const produitPhare = await Produits.aggregate()
      .lookup({
        from: "Images",
        localField: "codeProduit",
        foreignField: "codeProduit",
        as: "images",
      })
      .match({ produitPhare: 1 });
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
    const produitPhare = await Produits.aggregate()
      .lookup({
        from: "Images",
        localField: "codeProduit",
        foreignField: "codeProduit",
        as: "images",
      })
      .match(query)
      .sort(sort);
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
    const produitPhare = await Produits.aggregate()
      .lookup({
        from: "Images",
        localField: "codeProduit",
        foreignField: "codeProduit",
        as: "images",
      })
      .match(query)
      .sort(sort);
    res.json(produitPhare);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Fetch product
router.get("/:codeProduit", async (req, res) => {
  try {
    const codeProduit = Number.parseInt(req.params.codeProduit);
    const produit = await Produits.aggregate()
      .lookup({
        from: "Images",
        localField: "codeProduit",
        foreignField: "codeProduit",
        as: "images",
      })
      .match({ codeProduit })
      .limit(1)
      .cursor()
      .next();
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
