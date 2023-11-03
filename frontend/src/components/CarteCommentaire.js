import { Card } from "react-bootstrap";
import Etoile from "./Etoile";

function CarteCommentaire({ nomClient }) {
  return (
    <div>
      <Card.Title>Commentaires des clients</Card.Title>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Etoile size="20" />
          <Card.Title>Titre du commentaire</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Nom du client
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CarteCommentaire;
