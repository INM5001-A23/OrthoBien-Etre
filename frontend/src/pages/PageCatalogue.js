import ModelePage from "../layout/ModelePage";
import CarteProduit from "../components/CarteProduit";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useContext, useEffect, useState } from "react";
import { AxiosContext } from "..";
import { Container, Dropdown, DropdownButton, Form } from "react-bootstrap";
import FiltreCatalogue from "../components/FiltreCatalogue";

function PageCatalogue() {
  const axios = useContext(AxiosContext);
  const [produits, setProduits] = useState([]);
  const [filtre, setFiltre] = useState("");

  useEffect(() => {
    axios
      .get(`/produits/${filtre}`)
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
  }, [axios, filtre]);

  return (
    <ModelePage>
      <Container>
        <FiltreCatalogue filtre={filtre} setFiltre={setFiltre} />
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
