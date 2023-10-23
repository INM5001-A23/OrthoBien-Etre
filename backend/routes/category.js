import express from "express";
import Categories from "../models/Categories.js";

const router = express.Router();

// Fetch all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Categories.find({});
    res.json(categories);
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
