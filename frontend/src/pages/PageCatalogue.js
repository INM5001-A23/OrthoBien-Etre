import ModelePage from "../layout/ModelePage";
import CarteProduit from "../components/CarteProduit";
import BoutonDeroulant from "../components/BoutonDeroulant";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useContext, useEffect, useState } from "react";
import { AxiosContext } from "..";
import { Container } from "react-bootstrap";

function PageCatalogue() {
  const axios = useContext(AxiosContext);
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    axios
<<<<<<< HEAD:frontend/src/pages/Catalogue.js
      .get("/produits")
=======
      .get("/Produits")
>>>>>>> 90ffdf5a01267268243ec49abd5454a7afb06fb1:frontend/src/pages/PageCatalogue.js
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
  }, [axios]);

  return (
    <ModelePage>
      <Container>
        <BoutonDeroulant
          titre="Trier par"
          option1="Prix[Bas-Élevé]"
          option2="Prix[Élevé-Bas]"
          option3="Meilleurs vendeurs"
          option4="En promotion"
        />
        <Row xs={1} md={4} className="g-4 justify-content-center">
          {produits
            .map((produit) => (
              <Col xs="auto" md="auto" key={produit._id}>
                <CarteProduit produit={produit} achat />
              </Col>
            ))
            .slice(0, 15)}
        </Row>
      </Container>
    </ModelePage>
  );
}
export default PageCatalogue;
