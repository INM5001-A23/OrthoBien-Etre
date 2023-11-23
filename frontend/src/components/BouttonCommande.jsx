import {useState} from "react";
import { PayPalButtons } from "@paypal/react-paypal-js"; 

const Checkout = (props) => {

  const checkoutTotal = props.total;
  const [paidFor,setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  const handleApprove = (orderId) => {
   // API call to
                    // create order
                    // clear cart
                    // reduce inventory
                    

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
    <PayPalButtons
    createOrder={(data, actions) => {
      return actions.order.create({
        purchase_units:[
          {
            description: "",
            amount: {
              value: checkoutTotal
            }
          }
        ]
      })
    }}
    onApprove={ async (data, actions) => {
        const order = await actions.order.capture();
        console.log("order", order)

        handleApprove(data.orderID);
    }}
    />
  );
};

export default Checkout;