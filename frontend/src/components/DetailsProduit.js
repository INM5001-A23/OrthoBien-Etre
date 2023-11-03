import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import { Star, StarFill, StarHalf } from "react-bootstrap-icons";
import Button from "./Bouton";
import Carrousel from "./Carrousel";
import styles from "./DetailsProduit.css";
import NomCategorie from "./NomCategorie";
import Etoile from "./Etoile";
import CarteCommentaire from "./CarteCommentaire";

function DetailsProduit({
  produit: { nomProduit, description, codeCategorie },
  achat = false,
}) {
  console.log(styles);
  return (
    <Container>
      <Row>
        <Col>
          <Carrousel
            images={[
              "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
              "https://cdn.theatlantic.com/thumbor/W544GIT4l3z8SG-FMUoaKpFLaxE=/0x131:2555x1568/1600x900/media/img/mt/2017/06/shutterstock_319985324/original.jpg",
              "https://hips.hearstapps.com/hmg-prod/images/why-cats-are-best-pets-worshipped-animals-1559234295.jpg?crop=0.670xw:1.00xh;0.202xw,0&resize=980:*",
            ]}
            itemHeight="500px"
            className="product-images"
          />
        </Col>
        <Col>
          <Card style={{ height: "100%" }}>
            <Card.Body
              style={{
                alignItems: "center",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
              }}
            >
              <Card.Title>{nomProduit}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {codeCategorie && (
                  <NomCategorie codeCategorie={codeCategorie} />
                )}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                <Etoile size="30" />
              </Card.Subtitle>
              <Card.Text>{description}</Card.Text>

              <CarteCommentaire />

              <Stack
                direction="horizontal"
                gap={5}
                style={{ justifyContent: "center", margin: "20px" }}
              >
                <Button variant="primary">Ajouter au panier</Button>
                <Button variant="secondary">Acheter maintenant</Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    // <div className="d-flex flex-column align-items-center justify-content-center">
    //   <h1 className="mb-3">{nomProduit}</h1>
    //   <div className="d-grid gap-2">
    //     <Nav.Link onClick={() => navigate("/")}>
    //       <Bouton variant="primary" size="lg" className="w-50">
    //         Ajouter au panier
    //       </Bouton>
    //     </Nav.Link>
    //     {/* TODO
    //       Si compte existant, redirection sur PageAccueil avec nom a cote du logo.
    //       Si pas de compte, message erreur apparait*/}
    //     <Nav.Link onClick={() => navigate("/inscription")}>
    //       <Bouton variant="secondary" size="lg" className="w-50">
    //         Achat rapide
    //       </Bouton>
    //     </Nav.Link>
    //   </div>
    // </div>
  );
}
export default DetailsProduit;
