import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const Checkout = (props) => {

  const checkoutTotal = props;

  return (
    <PayPalButtons/>
  );
};

export default Checkout;