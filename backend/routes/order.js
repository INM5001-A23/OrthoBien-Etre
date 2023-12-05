import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import Commandes from "../models/Commandes.js";

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.use(cors());

router.post("/", cors(), async (req, res) => {
  try {
    let orderDetails = req.body;

    const newOrder = new Commandes({
      orderId: orderDetails.orderId,
      paymentId: orderDetails.paymentId,
      client: orderDetails.isClient,
      shippingInfos: {
        nomClient: orderDetails.shipping.nom,
        prenomClient: orderDetails.shipping.prenom,
        courriel: orderDetails.shipping.courriel,
        tel: orderDetails.shipping.telephone,
        adresse: {
          numeroCivic: orderDetails.shipping.civique,
          rue: orderDetails.shipping.rue,
          ville: orderDetails.shipping.ville,
          province: orderDetails.shipping.province,
          cp: orderDetails.shipping.postal,
        },
      },

      articles: orderDetails.cart,

      status: "Paid",
      sousTotal: orderDetails.sousTotal,
      fraisLivraison: orderDetails.fraisLivraison,
      tps: orderDetails.tps,
      tvq: orderDetails.tvq,
      rabais: 0,
      total: orderDetails.total,
    });

    await newOrder.save();
    res.status(200).json({ message: "Enregistré" });
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "Payment failed: " + error,
      success: false,
    });
  }
});

//get orders by emailAddress
router.get("/:emailAddress", async (req, res) => {
  const courriel = req.params.emailAddress
  try {
    const orderList = await Commandes.find({ 'shippingInfos.courriel':  courriel});
    console.log('Les commandes: ' + orderList)
    res.json(orderList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
