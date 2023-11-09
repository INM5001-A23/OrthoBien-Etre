import React, { useContext, useEffect, useState } from "react";
import { AxiosContext } from "..";
import ModelePage from "../layout/ModelePage";
import { Container, Stack, Form, Button } from "react-bootstrap";
import Checkout from '../components/Checkout'

function PagePaiement() {
  const axios = useContext(AxiosContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("/categories")
      .then(function (response) {
        // handle success
        console.log(response);
        setItems(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <ModelePage>
      <Container>
        <Stack gap={3}>
          <h1>Page de paiement</h1>
          <Checkout/>
        </Stack>
      </Container>
    </ModelePage>
  );
}

export default PagePaiement;
