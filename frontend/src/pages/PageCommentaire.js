import { Card } from "react-bootstrap";
import Etoile from "./Etoile";

function Commentaire() {
  return (
    <div>
      <Card.Title>Écrire un commentaire client</Card.Title>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Etoile size="20px" />
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

export default Commentaire;
