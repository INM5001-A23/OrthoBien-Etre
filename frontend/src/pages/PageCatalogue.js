import { useContext, useEffect, useState } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useSearchParams } from "react-router-dom";
import { AxiosContext } from "..";
import CarteProduit from "../components/CarteProduit";
import FiltreCatalogue from "../components/FiltreCatalogue";
import FiltreCategorie from "../components/FiltreCategorie";
import ModelePage from "../layout/ModelePage";

function PageCatalogue() {
  const axios = useContext(AxiosContext);
  const [searchParams] = useSearchParams();
  const [filtreCategorie, setFiltreCategorie] = useState(
    searchParams.get("filtreCategorie") || ""
  );
  const [produits, setProduits] = useState([]);
  const [filtre, setFiltre] = useState("");

  useEffect(() => {
    if (!!filtreCategorie) {
      axios.get(`/categories/${filtreCategorie}/produits`).then((response) => {
        setProduits(response.data);
      });
      return;
    }

    axios.get(`/produits/${filtre}`).then((response) => {
      setProduits(response.data);
    });
  }, [axios, filtre, filtreCategorie]);

  return (
    <ModelePage>
      <Container>
        <Stack direction="horizontal" gap={2}>
          <FiltreCatalogue filtre={filtre} setFiltre={setFiltre} />
          <FiltreCategorie
            filtre={filtreCategorie}
            setFiltre={setFiltreCategorie}
          />
          <Button
            style={{ margin: "0px 0px 15px 0px" }}
            onClick={() => {
              setFiltre(""); // Réinitialise le filtre principal
              setFiltreCategorie(""); // Réinitialise le filtre de catégorie
            }}
          >
            Réinitialiser
          </Button>
        </Stack>
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
