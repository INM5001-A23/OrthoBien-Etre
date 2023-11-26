import express from "express";
import Clients from "../models/Clients.js";

const router = express.Router();
router.use(express.json());

//ajouter un client dans la base de donnee
router.post("/", async (req, res) => {
  try {
    const {
      prenom,
      nom,
      courriel,
      mdp,
      rue,
      ville,
      province,
      codePostal,
      telephone,
    } = req.body;

    // TODO: Regarder si le courriel n'existe pas avant d'inserer

    const newClient = new Clients({
      prenom,
      nom,
      courriel,
      mdp,
      rue,
      ville,
      province,
      telephone,
      codePostal,
    });
    await newClient.save();
    res.status(200).json({ message: "Enregistré" });
  } catch (error) {
    console.log("Nobody knows what you did !" + error.message);
    res.status(500).json({ erreur: "Nobody knows !" });
  }
});

export default router;
