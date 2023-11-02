import React, { useContext, useEffect, useState } from "react";
import { AxiosContext } from "..";
import ModelePage from "../layout/ModelePage";
import { Container, Stack, Form, Button } from "react-bootstrap";

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
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nom sur la carte</Form.Label>
              <Form.Control type="text" placeholder="Entrez le nom sur la carte" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Numéro de carte de crédit</Form.Label>
              <Form.Control type="text" placeholder="Entrez le numéro de carte de crédit" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date d'expiration</Form.Label>
              <Form.Control type="text" placeholder="MM/AA" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Code de sécurité</Form.Label>
              <Form.Control type="text" placeholder="CVC" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Payer
            </Button>
          </Form>
        </Stack>
      </Container>
    </ModelePage>
  );
}

export default PagePaiement;
