import express from 'express';
import Produits from "../models/Produits.js";

const router = express.Router();
router.use(express.json());
//import jwt from "jsonwebtoken";

router.delete('/', async (req,res) =>{
    try{
       //const{codeProduit} = req.params;
        const {
            codeProduit,
        } = req.body;
        //const user = jwt.verify(token,process.env.JWT_SECRET);
        /*if(user.role !== "admin"){
            res.status(401).json({
                message: "Vous n'avez pas les autorisations nécessaires pour ajouter un produit."
            });
            return;
        }*/
       
        const produitSupp = await Produits.findOneAndDelete({codeProduit});
       

        if (produitSupp){
      
           res.status(200).json({message : "Le produit a été supprimé avec succès !"}); 

        } else {
            res.status(404).json({message : "Ce produit n'existe pas"});
        }

        
    }catch (error){
        console.log(error);
        res.status(500).json({erreur: "Impossible de supprimer ce produit"});
    }

})

export default router;