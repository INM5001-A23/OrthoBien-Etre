import express from 'express';
import Produits from "../models/Produits.js";

const router = express.Router();
router.use(express.json());
//import jwt from "jsonwebtoken";

/**
 * Cette route permet de modifier un produit
 * dans la collection Produits ,elle verifie 
 * avant que le produit existe  en se basant 
 * sur le codeProduit.
 */

router.put('/', async (req,res) =>{
    try{
       //const{codeProduit} = req.params;
        const {
            codeProduit,
            nomProduit,
            pDescription,
            quantite,
            description,
            codeCategorie,
            prix,
            promotion
        } = req.body;
        //const user = jwt.verify(token,process.env.JWT_SECRET);
        /*if(user.role !== "admin"){
            res.status(401).json({
                message: "Vous n'avez pas les autorisations nécessaires pour ajouter un produit."
            });
            return;
        }*/
       
        const verifProduit = await Produits.findOne({codeProduit});
       

        if (verifProduit){
            verifProduit.nomProduit = nomProduit || verifProduit.nomProduit;
            verifProduit.pDescription = pDescription || verifProduit.pDescription;
            verifProduit.quantite = quantite || verifProduit.quantite;
            verifProduit.description = description || verifProduit.description;
            verifProduit.codeCategorie = codeCategorie || verifProduit.codeCategorie;
            verifProduit.prix = prix || verifProduit.prix;
            verifProduit.promotion = promotion || verifProduit.promotion


           await verifProduit.save();
           res.status(200).json({message : "Le produit a été modifié avec succès !"}); 

        } else {
            res.status(404).json({message : "Ce produit n'existe pas"});
        }

        
    }catch (error){
        console.log(error);
        res.status(500).json({erreur: "Impossible de modifier ce produit"});
    }

})

export default router;
