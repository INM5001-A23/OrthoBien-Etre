import { Container, Stack } from "react-bootstrap";
import ModelePage from "../layout/ModelePage";
import CarteCercle from "../components/CarteCercle";
import "./PageAccueil.module.css";
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
      .get("/coffee/hot")
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

        <h1 className="jumbotron-heading">Les Produits Populaires</h1>
        <Container>
          <Row xs={1} md={3} className="g-3 justify-content-center">
            {items
              .map((item) => (
                <Col xs="auto" md="auto" key={item.id}>
                  <CarteCercle img={item.image} nomProduit={item.title} />
                </Col>
              ))
              .slice(0, 3)}
          </Row>
        </Container>

        <h1 className="jumbotron-heading">Les Catégories</h1>
        <Container>
          <Row xs={1} md={3} className="g-3 justify-content-center">
            {items
              .map((item) => (
                <Col xs="auto" md="auto" key={item.id}>
                  <CarteCercle img={item.image} nomProduit={item.title} />
                </Col>
              ))
              .slice(0, 10)}
          </Row>
        </Container>

        <h1 className="jumbotron-heading">Les Promotions</h1>
        <Container>
          <Row xs={1} md={3} className="g-3 justify-content-center">
            {items
              .map((item) => (
                <Col xs="auto" md="auto" key={item.id}>
                  <CarteCercle img={item.image} nomProduit={item.title} />
                </Col>
              ))
              .slice(0, 3)}
          </Row>
        </Container>
      </Stack>
    </ModelePage>
  );
}

export default PageAccueil;
