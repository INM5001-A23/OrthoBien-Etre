import { Button, Card, Container, Row } from "react-bootstrap";
import Etoile from "./Etoile";

function CarteCommentaire({ nomClient, titre, commentaire, evaluation }) {
  return (
    <Container>
      <h3 style={{ textAlign: "center" }}>Commentaires des clients</h3>
      <Row xs={1} md={4} className="g-4 justify-content-center">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Etoile evaluation={evaluation} size="20px" />
            <Card.Title>{titre}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {nomClient}
            </Card.Subtitle>
            <Card.Text>{commentaire}</Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default CarteCommentaire;