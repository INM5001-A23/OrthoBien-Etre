import express from "express";
import Produits from "../models/Produits.js";
import jwt from "jsonwebtoken";

const router = express.Router();
router.use(express.json());

/**
 * Cette route permet d'ajouter un produit
 * dans la collection Produits ,elle verifie
 * avant que le produit n'existe pas en se basant
 * sur le codeProduit et le nomProduit
 */

router.post("/", async (req, res) => {
  try {
    const {
      codeProduit,
      nomProduit,
      pDescription,
      quantite,
      description,
      codeCategorie,
      prix,
      promotion,
      token,
    } = req.body;

    const user = jwt.verify(token, process.env.JWT_SECRET);

    if (user.role !== "admin") {
      res.status(401).json({
        message:
          "Vous n'avez pas les autorisations nécessaires pour ajouter un produit.",
      });
      return;
    }

    //Verifier que le codeProduit ou nomProduit n'est pas dans la collection

    const verifProduit = await Produits.findOne({ codeProduit, nomProduit });

    if (!verifProduit) {
      //ajout du produit dans la collection si pas existant

      const newProduit = new Produits({
        codeProduit,
        nomProduit,
        pDescription,
        description,
        codeCategorie,
        prix,
        promotion,
        quantite,
      });

      await newProduit.save();
      res.status(200).json({ message: "Le produit a été ajouté !" });
    } else {
      res.status(520).json({ message: "Ce produit existe déjà" });
    }
  } catch (error) {
    res.status(550).json({ erreur: "Could not add product " });
  }
});

export default router;
