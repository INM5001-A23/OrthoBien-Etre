import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "../components/PaymentForm";
import ModelePage from "../layout/ModelePage";
import { Container, Stack, Form, Button } from "react-bootstrap";

function PagePaiement() {
  const stripeTestPromise = loadStripe(
    "pk_test_51OB0JqEAjLSuYLB5HfTwA8aqpmN0EnTlKBQRS0x1gxIr2b2CtRhwmQuIdunsbo8j0H5L5PlOmdTbxmWdMN37ORb600vKFk8RmR"
  );

  return (
    <ModelePage>
      <Container>
        <Stack gap={3}>
          <h1>Page de paiement</h1>
          <Elements stripe={stripeTestPromise}>
            <PaymentForm />
          </Elements>
        </Stack>
      </Container>
    </ModelePage>
  );
}

export default PagePaiement;
