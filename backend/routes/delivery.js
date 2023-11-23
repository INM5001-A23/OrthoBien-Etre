import express from "express";
import Commande from "../models/Commandes.js";

const router = express.Router();

router.get("/", async (req, res) => {
  
});

router.post("/", async (req, res) => {
    try {
        const {
          prenom,
          nom,
          courriel,
          civique,
          rue,
          ville,
          province,
          postal,
          telephone,
        } = req.body;

        const commande = new Commande();

        commande.invite.prenomClient = prenom
        commande.invite.nomClient = nom
        commande.invite.courriel = courriel
        commande.invite.adresse.tel = telephone
        commande.invite.adresse.numeroCivic = civique
        commande.invite.adresse.rue = rue
        commande.invite.adresse.ville = ville
        commande.invite.adresse.province = province
        commande.invite.adresse.cp = postal

        await console.log(commande.invite)
        
        //await commande.save();

        res.status(200).json({ message: "Enregistré" });
      } catch (error) {
        console.log("Erreur" + error.message);
        res.status(500).json({ erreur: "Erreur" });
      }
});

export default router;