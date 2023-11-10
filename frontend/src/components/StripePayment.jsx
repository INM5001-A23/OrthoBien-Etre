import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"


const stripeTestPromise = loadStripe("pk_test_51OB0JqEAjLSuYLB5HfTwA8aqpmN0EnTlKBQRS0x1gxIr2b2CtRhwmQuIdunsbo8j0H5L5PlOmdTbxmWdMN37ORb600vKFk8RmR");


export default function StripePayment() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}