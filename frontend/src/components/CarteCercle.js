import Card from "react-bootstrap/Card";

function CarteCercle({ img, nomProduit, path }) {
  return (
    <Card
      style={{
        width: "15rem",
        textAlign: "center",
        // display: "inline",
      }}
    >
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{nomProduit}</Card.Title>
        <Card.Link href="/{path}">Voir détails</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CarteCercle;
