import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import styles from "./Carte.module.css";
import { Link, useNavigate } from "react-router-dom";
import NomCategorie from "./NomCategorie";

function CarteProduit({
  img,
  nomProduit,
  codeCategorie,
  description,
  prix,
  achat = false,
}) {
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
        <Card.Title className="mb-0">{nomProduit}</Card.Title>
        {description && (
          <Card.Text className={styles["description-field"]}>
            {description}
          </Card.Text>
        )}
      </Card.Body>

      <ListGroup className="list-group-flush">
        {codeCategorie && <NomCategorie codeCategorie={codeCategorie} />}
        {prix && <ListGroup.Item>{prix}</ListGroup.Item>}
        <ListGroup.Item className="lien">
          <Link onClick={() => navigate("/produit")}>Voir détails</Link>
        </ListGroup.Item>
        {achat && (
          <>
            <ListGroup.Item>
              <Card.Link href="#">Ajouter au panier</Card.Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Card.Link href="#">Acheter maintenant</Card.Link>
            </ListGroup.Item>
          </>
        )}
      </ListGroup>
    </Card>
  );
}

export default CarteProduit;
