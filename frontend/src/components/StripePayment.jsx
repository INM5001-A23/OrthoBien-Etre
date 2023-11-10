import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./checkoutForm";

const stripePromise = loadStripe("pk_test_51OB0JqEAjLSuYLB5HfTwA8aqpmN0EnTlKBQRS0x1gxIr2b2CtRhwmQuIdunsbo8j0H5L5PlOmdTbxmWdMN37ORb600vKFk8RmR");

export default function StripeCheckout() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("{{EDUCATIVE_LIVE_VM_URL}}/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{}] }),
    })  
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const options = {
    clientSecret,
  };

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}