import { Container, Stack } from "react-bootstrap";
import ModelePage from "../layout/ModelePage";
import Carte from "../components/Carte";
import { useContext, useEffect, useState } from "react";
import { AxiosContext } from "..";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Carrousel from "../components/Carrousel";

function PageAccueil() {
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
      <Stack gap={3}>
        <Carrousel images={items.map((items) => items.image).slice(0, 5)} />

        <Container className="text-center">
          <Row className="p-3">
            <h1>Les Promotions</h1>
          </Row>
          <Row xs={1} md={3} className="g-3 justify-content-center">
            {items
              .map((item) => (
                <Col xs="auto" md="auto" key={item.id}>
                  <Carte img={item.image} nomProduit={item.title} />
                </Col>
              ))
              .slice(0, 3)}
          </Row>
        </Container>

        <Container className="text-center">
          <Row className="p-3">
            <h1>Les Produits Populaires</h1>
          </Row>
          <Row xs={1} md={3} className="g-3 justify-content-center">
            {items
              .map((item) => (
                <Col xs="auto" md="auto" key={item.id}>
                  <Carte img={item.image} nomProduit={item.title} />
                </Col>
              ))
              .slice(0, 3)}
          </Row>
        </Container>

        <Container className="text-center">
          <Row className="p-3">
            <h1>Les Catégories</h1>
          </Row>
          <Row xs={1} md={3} className="g-3 justify-content-center">
            {items
              .map((item) => (
                <Col xs="auto" md="auto" key={item.id}>
                  <Carte img={item.nom} nomProduit={item.quantite} />
                </Col>
              ))
              .slice(0, 10)}
          </Row>
        </Container>
      </Stack>
    </ModelePage>
  );
}

export default PageAccueil;
