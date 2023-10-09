import ModelePage from "../layout/ModelePage";
import Carte from "../components/Carte";
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
              <Col xs="auto" md="auto" key={item.id}>
                <Carte
                  img={item.image}
                  nomProduit={item.title}
                  categorie="Catégorie"
                  description={item.description}
                  prix="Prix(0.00 $)"
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
