import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import styles from "./Carte.module.css";
import { Link, useNavigate } from "react-router-dom";
import NomCategorie from "./NomCategorie";

function CarteCategorie({ categorie: { img, nomCategorie, codeCategorie } }) {
  const navigate = useNavigate();
  return (
    <Card
      style={{
        width: "15rem",
        textAlign: "center",
      }}
    >
      <Card.Img className={styles["header-img"]} variant="top" src={img} />
      <Card.Body>
        <Card.Title className="mb-0">{nomCategorie}</Card.Title>
      </Card.Body>

      <ListGroup className="list-group-flush">
        {codeCategorie && <NomCategorie codeCategorie={codeCategorie} />}
        <ListGroup.Item className="lien">
          <Link onClick={() => navigate(`/categorie/${codeCategorie}`)}>
            Voir plus
          </Link>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default CarteCategorie;
