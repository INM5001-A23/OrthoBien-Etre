import express from "express";
import Clients from "../models/Clients.js";

const router = express.Router();
router.use(express.json());

//ajouter un client dans la base de donnee
router.post("/inscription", async (req, res) => {
  try {
    const {
      prenom,
      nom,
      courriel,
      mdp,
      civique,
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
      civique,
      rue,
      ville,
      province,
      telephone,
      codePostal,
    });

    console.log(newClient);

    await newClient.save();
    res.status(200).json({ message: "Enregistré" });
  } catch (error) {
    console.log("Nobody knows what you did !" + error.message);
    res.status(500).json({ erreur: "Nobody knows !" });
  }
});

// Trouver utilisateur par adresse courriel
router.get("/find/:useremail", async (req, res) => {
  const userEmail = req.params.useremail;
  try {
    const theUser = await Clients.findOne({ courriel: userEmail });

    if (!theUser) {
      res.status(404).json({ message: "Utilisateur non trouvé." });
      return;
    }
    res.json(theUser);
  } catch (error) {
    res.status(500).send();
  }
});

export default router;
