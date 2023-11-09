import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import styles from "./Carte.module.css";
import { Link, useNavigate } from "react-router-dom";
import NomCategorie from "./NomCategorie";
import { Button } from "react-bootstrap";

function CarteProduit({
  produit: { codeProduit, img, nomProduit, codeCategorie, description, prix },
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
      <Card.Img
        className={styles["header-img"]}
        variant="top"
        src={`/images/produits/${codeProduit}.jpeg`}
      />
      <Card.Body>
        <Card.Title className="mb-0">{nomProduit}</Card.Title>
      </Card.Body>

      <ListGroup className="list-group-flush">
        {codeCategorie && <NomCategorie codeCategorie={codeCategorie} />}
        {prix && <ListGroup.Item>{prix}</ListGroup.Item>}
        <ListGroup.Item className="lien">
          <Button
            variant="outline-secondary"
            onClick={() => navigate(`/produit/${codeProduit}`)}
          >
            Voir détails
          </Button>
        </ListGroup.Item>
        {achat && (
          <>
            <ListGroup.Item>
              <Button variant="outline-primary" href="#">
                Ajouter au panier
              </Button>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button variant="outline-success" href="#">
                Acheter maintenant
              </Button>
            </ListGroup.Item>
          </>
        )}
      </ListGroup>
    </Card>
  );
}

export default CarteProduit;
