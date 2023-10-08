import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./CarteCarree.css";

function CarteCarree({ img, nomProduit, categorie, description, prix }) {
  return (
    <Row xs={1} md={1} className="g-1">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
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
        </Col>
      ))}
    </Row>
  );
}

export default CarteCarree;
