import express from "express";
import Connexion from "../models/Connexion.js";
import Clients from "../models/Clients.js";
import Administrateurs from "../models/Administrateurs.js";

const router = express.Router();
router.use(express.json());

router.post('/', async (req, res) => {
    try{
        const {courriel,mdp} =req.body;

        const admin = await Administrateurs.findOne({courriel}, 'courriel mdp prenomAdmin codeAdmin ');

        if (!admin) {

            const user = await Clients.findOne({courriel},'courriel mdp prenom nom rue ville province codePostal telephone');
        
            if (!user){
                return res.status(501).json({erreur : "Votre courriel ou mot de passe est incorrecte"})
            }

            if(user.mdp == mdp){
                console.log(user.mdp, user.courriel, user.prenom)
                return res.status(201).json({success: true, message: "Bonjour " + user.prenom,
                prenom : user.prenom,
                courriel: user.courriel , 
                prenom:user.prenom, 
                nom : user.nom,
                rue : user.rue, 
                ville: user.ville ,
                province : user.province, 
                codePostal : user.codePostal, 
                telephone: user.telephone
            })
            }else{
                return res.status(501).json({erreur : "Votre courriel ou mot de passe est incorrecte"})

            }
        }else{

            if(admin.mdp == mdp){

                return res.status(202).json({success: true, 
                message: "Bonjour " + admin.prenomAdmin + " vous êtes connectés comme administrateur",
                prenomAdmin : admin.prenomAdmin,
                codeAdmin : admin.codeAdmin
             })
            }else{
                return res.status(505).json({erreur : "Courriel admin ou mot de passe incorrect"})

            }
        }

    }catch(error){
        console.log("He is sure not connected" + error.message);
        res.status(510).json({erreur: "definetly not connected at all lol"})
    }
}
)

export default router;
