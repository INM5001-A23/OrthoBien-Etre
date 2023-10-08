import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

function CarteCarree({ img, nomProduit, categorie, description, prix }) {
  return (
    <Card
      style={{
        width: "15rem",
        textAlign: "center",
      }}
    >
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{nomProduit}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>

      <ListGroup className="list-group-flush">
        <ListGroup.Item>{categorie}</ListGroup.Item>
        <ListGroup.Item>{prix}</ListGroup.Item>
        <ListGroup.Item className="lien">
          <Card.Link href="#">Détails</Card.Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Card.Link href="#">Ajouter au panier</Card.Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Card.Link href="#">Acheter maintenant</Card.Link>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default CarteCarree;
