import { Container, Stack } from "react-bootstrap";
import ModelePage from "../layout/ModelePage";
import CarteProduit from "../components/CarteProduit";
import { useContext, useEffect, useState } from "react";
import { AxiosContext } from "..";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Carrousel from "../components/Carrousel";
import CarteCategorie from "../components/CarteCategorie";
// import Images from '../../public/images/carousel'

function PageAccueil() {
  const axios = useContext(AxiosContext);
  const [promotions, setPromotions] = useState([]);
  const [produitsPopulaire, setProduitsPopulaire] = useState([]);
  const [categories, setCategories] = useState([]);

  const imagesCode = [1001,1002,1003];
  const imagesList = imagesCode.map((item) => {
    return `./images/${item}.png`
  });
  
  useEffect(() => {
    axios
      .get("/categories")
      .then(function (response) {
        // handle success
        setCategories(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [axios]);

  useEffect(() => {
    axios
      .get("/produits/populaire")
      .then(function (response) {
        // handle success
        console.log(response);
        setProduitsPopulaire(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [axios]);

  useEffect(() => {
    axios
      .get("/produits/promotion")
      .then(function (response) {
        // handle success
        setPromotions(response.data);
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
      <Stack gap={3}>
        <Carrousel
          images={imagesList}
        />

        <Container className="text-center">
          <Row className="p-3">
            <h1>Les Promotions</h1>
          </Row>
          <Row xs={1} md={3} className="g-3 justify-content-center">
            {promotions.map((produit) => (
              <Col xs="auto" md="auto" key={produit._id}>
                <CarteProduit produit={produit} />
              </Col>
            ))}
          </Row>
        </Container>

        <Container className="text-center">
          <Row className="p-3">
            <h1>Les Produits Populaires</h1>
          </Row>
          <Row xs={1} md={3} className="g-3 justify-content-center">
            {produitsPopulaire
              .map((produitPopulaire) => (
                <Col xs="auto" md="auto" key={produitPopulaire._id}>
                  <CarteProduit produit={produitPopulaire} />
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
            {categories
              .map((categorie) => (
                <Col xs="auto" md="auto" key={categorie._id}>
                  {/* {JSON.stringify(categorie)} */}
                  <CarteCategorie categorie={categorie} />
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
