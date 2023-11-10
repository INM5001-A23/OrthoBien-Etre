import express from 'express';
import Stripe from 'stripe';
const stripe = new Stripe("sk_test_51OB0JqEAjLSuYLB51HqdT7zeZPisyTMNcA5rBVjuu0aQwEBmSNJaNndltNyUAcn9ZApTCE3W4im9Pzq5PKoMmlp2000Pjp6Oif");
import bodyParser from "body-parser"
import cors from "cors"

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

router.use(cors())

router.post("/", cors(), async (req, res) => {
	let { amount, id } = req.body
	try {
		const payment = await stripe.paymentIntents.create({
			amount,
			currency: "CAD",
			description: "Ortho Bien-Etre",
			payment_method: id,
			confirm: true
		})
		console.log("Payment", payment)
		res.json({
			message: "Payment successful",
			success: true
		})
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Payment failed",
			success: false
		})
	}
})

export default router;
