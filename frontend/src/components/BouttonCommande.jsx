import {useState} from "react";
import { PayPalButtons } from "@paypal/react-paypal-js"; 

const Checkout = (props) => {

  const checkoutTotal = props.total;
  const [paidFor,setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  const handleApprove = (orderId) => {
    //call backend function to fufill order

    //if response is success
    setPaidFor(true)

    if(paidFor) {}
    //and clear cart and user profile if any
    //and redirect user to success page

    if(error) {}
    //if response is failed
    // alert message why and contact infos for customer survice
  }

  return (
    <PayPalButtons/>
  );
};

export default Checkout;