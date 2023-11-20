import express from "express";
import Connexion from "../models/Connexion.js";
import Clients from "../models/Clients.js";
import Administrateurs from "../models/Administrateurs.js";
import jwt from "jsonwebtoken";

const router = express.Router();
router.use(express.json());

/**
 * Cette route verifier que l'adresse courriel et le mot de passe
 * concordent avec l'information dans l'une des deux collections :
 * Clients ou Administrateurs
 * Elle retoure un message d'accueuil avec le prenom de la personne
 * connectée.
 * @returns Et les values nécessaire au profil client ou profil admin
 */

router.post("/", async (req, res) => {
  try {
    //Information de connexion

    const { courriel, mdp } = req.body;

    //veification de l'acces admin

    const admin = await Administrateurs.findOne(
      { courriel },
      "courriel mdp prenomAdmin codeAdmin "
    );

    if (!admin) {
      //Verification de l'acces client
      const user = await Clients.findOne(
        { courriel },
        "courriel mdp prenom nom rue ville province codePostal telephone"
      );

      if (!user) {
        return res
          .status(501)
          .json({ erreur: "Votre courriel ou mot de passe est incorrecte" });
      }

      //return : message d'accueil + valeurs pour page profil

      if (user.mdp == mdp) {
        const auth = {
          role: "client",
          message: "Bonjour " + user.prenom,
          prenom: user.prenom,
          courriel: user.courriel,
          prenom: user.prenom,
          nom: user.nom,
          rue: user.rue,
          ville: user.ville,
          province: user.province,
          codePostal: user.codePostal,
          telephone: user.telephone,
        };

        const token = jwt.sign(auth, process.env.JWT_SECRET);

        return res.status(200).json({
          success: true,
          token,
          ...auth,
        });
      } else {
        return res
          .status(401)
          .json({ erreur: "Votre courriel ou mot de passe est incorrecte" });
      }
    } else {
      if (admin.mdp == mdp) {
        //return message d'accueil + value pour page profil admin au besoin

        const auth = {
          role: "admin",
          message:
            "Bonjour " +
            admin.prenomAdmin +
            " vous êtes connectés comme administrateur",
          prenomAdmin: admin.prenomAdmin,
          codeAdmin: admin.codeAdmin,
        };

        const token = jwt.sign(auth, process.env.JWT_SECRET);

        return res.status(200).json({
          success: true,
          token,
          ...auth,
        });
      } else {
        return res
          .status(401)
          .json({ erreur: "Courriel admin ou mot de passe incorrect" });
      }
    }
  } catch (error) {
    console.log("He is sure not connected" + error.message);
    res.status(510).json({ erreur: "definetly not connected at all lol" });
  }
});

export default router;
