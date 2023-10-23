import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import styles from "./Carte.module.css";

function CarteCarree({
  img,
  nomProduit,
  categorie,
  description,
  prix,
  achat = false,
}) {
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
        {categorie && <ListGroup.Item>{categorie}</ListGroup.Item>}
        {prix && <ListGroup.Item>{prix}</ListGroup.Item>}
        <ListGroup.Item className="lien">
          <Card.Link href="#">Voir détails</Card.Link>
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

export default CarteCarree;
