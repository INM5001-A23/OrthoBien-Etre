import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.use(cors());

router.post("/", cors(), async (req, res) => {
  let { amount, id } = req.body;
  try {
    
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "Payment failed",
      success: false,
    });
  }
});

export default router;

// router.post('/add', auth, async (req, res) => {
//   try {
//     const cart = req.body.cartId;
//     const total = req.body.total;
//     const user = req.user._id;

//     const order = new Order({
//       cart,
//       user,
//       total
//     });

//     const orderDoc = await order.save();

//     const cartDoc = await Cart.findById(orderDoc.cart._id).populate({
//       path: 'products.product',
//       populate: {
//         path: 'brand'
//       }
//     });

//     const newOrder = {
//       _id: orderDoc._id,
//       created: orderDoc.created,
//       user: orderDoc.user,
//       total: orderDoc.total,
//       products: cartDoc.products
//     };

//     await mailgun.sendEmail(order.user.email, 'order-confirmation', newOrder);

//     res.status(200).json({
//       success: true,
//       message: `Your order has been placed successfully!`,
//       order: { _id: orderDoc._id }
//     });
//   } catch (error) {
//     res.status(400).json({
//       error: 'Your request could not be processed. Please try again.'
//     });
//   }
// });
