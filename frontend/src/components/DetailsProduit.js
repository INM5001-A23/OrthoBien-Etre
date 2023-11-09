import { Card, Col, Container, ListGroup, Row, Stack } from "react-bootstrap";

import Button from "./Bouton";
import Carrousel from "./Carrousel";
import NomCategorie from "./NomCategorie";
import Etoile from "./Etoile";
import CarteCommentaire from "./CarteCommentaire";
import "./DetailsProduit.css";

function DetailsProduit({
  produit: {
    nomProduit,
    codeProduit,
    description,
    codeCategorie,
    prix,
    evaluation,
  },
  achat = false,
}) {
  return (
    <Container>
      <Row>
        <Col>
          <Carrousel
            images={[`/images/produits/${codeProduit}.jpeg`]}
            itemHeight="500px"
            className="product-images"
          />
        </Col>
        <Col style={{}}>
          <Card style={{ height: "55%" }}>
            <Card.Body
              style={{
                alignItems: "center",
              }}
            >
              <Etoile evaluation={evaluation} size="30" />
              <Card.Title>{nomProduit}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {codeCategorie && (
                  <NomCategorie codeCategorie={codeCategorie} />
                )}
              </Card.Subtitle>
              {prix && <ListGroup.Item>{prix}</ListGroup.Item>}
              <Card.Subtitle className="mb-2 text-muted" />
              <Card.Text>{description}</Card.Text>
              <Stack
                direction="horizontal"
                gap={5}
                style={{ justifyContent: "center", margin: "0px" }}
              >
                <Button variant="outline-primary">Ajouter au panier</Button>
                <Button variant="outline-success">Acheter maintenant</Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Row className="g-4">
          <h2 style={{ textAlign: "center" }}>Commentaires des clients</h2>
        </Row>
        <Row style={{ padding: "10px 0 20px 0" }}>
          <Button variant="success">
            <Card.Title>Écrire un commentaire</Card.Title>
          </Button>
        </Row>
        {/* TODO 
        Affiche sil y a des commentaires pour le produit */}
        <CarteCommentaire
          nomClient={"Nom du client"}
          titre={"Titre du commentaire"}
          commentaire={
            "Some quick example text to build on the card title and make up the bulk of the card's content."
          }
          evaluation={4}
        />
      </Row>
    </Container>
  );
}
export default DetailsProduit;
