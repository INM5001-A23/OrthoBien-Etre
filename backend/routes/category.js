import express from "express";
import Categories from "../models/Categories.js";
import Produit from "../models/Produits.js";

const router = express.Router();

// Fetch all categories
router.get("/", async (req, res) => {
  try {
    const codeCategorie = req.params.codeCategorie;
    const categories = await Categories.find({});
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Fetch products by category
router.get("/:codeCategorie/produits", async (req, res) => {
  try {
    const codeCategorie = Number.parseInt(req.params.codeCategorie);
    const categoriesProduits = await Produit.aggregate()
      .lookup({
        from: "Avis",
        localField: "codeProduit",
        foreignField: "codeProduit",
        as: "avis",
      })
      .lookup({
        from: "Images",
        localField: "codeProduit",
        foreignField: "codeProduit",
        as: "images",
      })
      .match({ codeCategorie });
    res.json(categoriesProduits);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:code", async (req, res) => {
  try {
    const codeCategorie = req.params.code;
    const categorie = await Categories.findOne({ codeCategorie });
    res.json(categorie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
