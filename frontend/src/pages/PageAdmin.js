import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import ModelePage from "../layout/ModelePage";
import { useContext, useEffect, useState } from "react";
import { AxiosContext } from "..";

import CarteAdmin from "../components/CarteAdmin";

function PageAdmin() {
  const axios = useContext(AxiosContext);
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    axios
      .get("/Produits")
      .then(function (response) {
        // handle success
        console.log(response);
        setProduits(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [axios]);

  return (
    <ModelePage>
      <Stack
        className="d-flex flex-column align-items-center justify-content-center"
        gap={3}
      >
        <h1 className="mb-2">Gestion des stocks</h1>

        <Button variant="outline-success" size="lg">
          Ajouter un produit
        </Button>

        <Container>
          <Row xs={1} md={4} className="g-4 justify-content-center">
            {produits
              .map((produit) => (
                <Col xs="auto" md="auto" key={produit._id}>
                  <CarteAdmin produit={produit} />
                </Col>
              ))
              .slice(0, 15)}
          </Row>
        </Container>
      </Stack>
    </ModelePage>
  );
}

export default PageAdmin;