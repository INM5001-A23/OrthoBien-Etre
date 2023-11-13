import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";

function CarteCategorie({ categorie: { img, nomCategorie, codeCategorie } }) {
  const navigate = useNavigate();
  return (
    <Card
      style={{
        width: "15rem",
        textAlign: "center",
      }}
    >
      <Card.Body>
        <Card.Title className="mb-0">{nomCategorie}</Card.Title>
      </Card.Body>

      <ListGroup className="list-group-flush">
        <ListGroup.Item className="lien">
          <Link
            onClick={() =>
              navigate(`/catalogue?filtreCategorie=${codeCategorie}`)
            }
          >
            Voir plus
          </Link>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default CarteCategorie;
