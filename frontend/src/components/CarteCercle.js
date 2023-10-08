import Card from "react-bootstrap/Card";

function CarteCercle({ img, nomProduit }) {
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
        <Card.Text>
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CarteCercle;
