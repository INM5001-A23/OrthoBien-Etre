import Card from "react-bootstrap/Card";
import styles from "./Carte.module.css";

function CarteCercle({ img, nomProduit, path }) {
  return (
    <Card
      style={{
        width: "15rem",
        textAlign: "center",
      }}
    >
      <Card.Img className={styles["header-img"]} variant="top" src={img} />
      <Card.Body>
        <Card.Title>{nomProduit}</Card.Title>
        <Card.Link href="/{path}">Voir détails</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CarteCercle;
