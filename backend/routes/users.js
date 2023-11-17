import express from "express";
import Clients from "../models/Clients.js";

const router = express.Router();
router.use(express.json());

//ajouter un client dans la base de donnee
router.post('/', async (req, res) =>{
    try{
        const {prenom,nom,courriel,rue,ville,province,codePostal,telephone,mdp} = req.body;
    
        const newClient = new Clients ({
            prenom,
            nom,
            courriel,
            rue,
            ville,
            province,
            telephone,
            codePostal,
            mdp
        });
        await newClient.save();
        res.status(200).json({message: "Enregistré"})

    }catch(error){
        console.log("Nobody knows what you did !" + error.message);
           res.status(500).json({erreur : "Nobody knows !"})
    }
}
)
export default router;