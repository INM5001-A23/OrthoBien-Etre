
import React, { useState } from 'react';
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useContext } from "react";
import { AxiosContext } from "..";
import { useNavigate,useLocation } from "react-router-dom";

const Checkout = (props) => {
    const checkoutTotal = props.total;
    const navigate = useNavigate();
    const axios = useContext(AxiosContext);
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    const onCreateOrder = (data,actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: checkoutTotal,
                    },
                },
            ],
        });
    }

    const onApproveOrder = (data,actions) => {
        return actions.order.capture().then((details) => {
            navigate("/confirmation", {
                state: { total: checkoutTotal },
              })
        });
    }

    return (
        <div className="checkout">
            {isPending ? <p>LOADING...</p> : (
                <>
                    <PayPalButtons 
                        style={{ layout: "vertical" }}
                        createOrder={(data, actions) => onCreateOrder(data, actions)}
                        onApprove={(data, actions) => onApproveOrder(data, actions)}
                    />
                </>
            )}
        </div>
    );
}

export default Checkout;