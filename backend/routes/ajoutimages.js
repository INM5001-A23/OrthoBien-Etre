import express from "express";
import Image from "../models/Mages.js";
import jwt from "jsonwebtoken";



const router = express.Router();
router.use(express.json());

// router.post("/", async(req,res)=>{

//     const {image,codeProduit} = req.body;

//     try{

//    const newImage = new Image ({image:image}, {codeProduit:codeProduit}) ;
//    await newImage.save();
//      res.status(201).json("L'image a été ajoutée avec succès");
//      }catch (err){
//         console.log(err);
//       }
//      }
// );

// export default router;

router.post("/", async (req, res) => {
  try {
    const {
      codeProduit,
      image,
    } = req.body;
    
   const newImage = new Image({
        codeProduit,
        image
      });

      await newImage.save();
      res.status(220).json({ message: "L'image a été ajouté !" });
   
  } catch (error) {
    res.status(550).json({ erreur: "Could not add product " });
  }
});

export default router;



