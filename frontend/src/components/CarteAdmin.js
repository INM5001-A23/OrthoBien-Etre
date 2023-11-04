import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Carte.module.css";

function CarteAdmin({
  produit: { codeProduit, img, nomProduit, codeCategorie, description, prix },
}) {
  const navigate = useNavigate();
  return (
    <Card style={{ width: "18rem", textAlign: "center" }}>
      <Card.Img
        className={styles["header-img"]}
        variant="top"
        src={`/images/produits/${codeProduit}.jpeg`}
      />
      <Card.Body>
        <Card.Title>{nomProduit}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button style={{ color: "white" }} variant="primary">
          Modifier
        </Button>
        <Button variant="danger">Supprimer</Button>
      </Card.Body>
    </Card>
  );
}

export default CarteAdmin;
