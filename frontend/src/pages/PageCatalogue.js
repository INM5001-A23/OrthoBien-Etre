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
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("/products")
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
        <BoutonDeroulant
          titre="Trier par"
          option1="Prix[Bas-Élevé]"
          option2="Prix[Élevé-Bas]"
          option3="Meilleurs vendeurs"
          option4="En promotion"
        />
        <Row xs={1} md={4} className="g-4 justify-content-center">
          {items
            .map((item) => (
              <Col xs="auto" md="auto" key={item._id}>
                <CarteProduit
                  img={item.image}
                  nomProduit={item.nomProduit}
                  codeCategorie={item.codeCategorie}
                  description={item.description}
                  prix={item.prix}
                  achat
                />
              </Col>
            ))
            .slice(0, 15)}
        </Row>
      </Container>
    </ModelePage>
  );
}
export default PageCatalogue;
