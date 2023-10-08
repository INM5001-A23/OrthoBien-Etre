import { Stack } from "react-bootstrap";
import ModelePage from "../layout/ModelePage";
import CarteCercle from "../components/CarteCercle";
import "./PageAccueil.css";
import { useContext } from "react";
import { AxiosContext } from "..";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Carrousel from "../components/Carrousel";

function PageAccueil() {
  const axios = useContext(AxiosContext);

  axios
    .get("/pokemon")
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

  return (
    <ModelePage>
      <Stack gap={3}>
        <Carrousel
          img1="https://picsum.photos/536/354"
          img2="https://picsum.photos/536/354"
          img3="https://picsum.photos/536/354"
        />

        <h1 className="jumbotron-heading">Les Produits Populaires</h1>
        <Row xs={1} md={3} className="g-3">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Col key={idx}>
              <CarteCercle img="/bones.svg" nomProduit="Allo" />
            </Col>
          ))}
        </Row>
        <h1 className="jumbotron-heading">Les Catégories</h1>
        <Row xs={1} md={4} className="g-3">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col key={idx}>
              <CarteCercle img="/bones.svg" nomProduit="Allo" />
            </Col>
          ))}
        </Row>
        <h1 className="jumbotron-heading">Les Promotions</h1>
        <Row xs={1} md={4} className="g-3">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col key={idx}>
              <CarteCercle img="/bones.svg" nomProduit="Allo" />
            </Col>
          ))}
        </Row>
      </Stack>
    </ModelePage>
  );
}

export default PageAccueil;
