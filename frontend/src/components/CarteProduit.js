import ListGroup from "react-bootstrap/ListGroup";
import styles from "./Carte.module.css";
import { Link, useNavigate } from "react-router-dom";
import NomCategorie from "./NomCategorie";
import { Badge, Button, Row, Col, Card } from "react-bootstrap";

function CarteProduit({
  produit: { codeProduit, img, nomProduit, codeCategorie, prix, promotion },
  achat = false,
}) {
  const navigate = useNavigate();
  return (
    <Card
    onClick={() => navigate(`/produit/${codeProduit}`)}
      style={{
        width: "18rem",
        textAlign: "center",
      }}
    >
      <div style={{ position: "relative", display: "inline-block" }}>
        <Card.Img
          className={styles["header-img"]}
          variant="top"
          src={`/images/produits/${codeProduit}.jpeg`}
        />
        <h5>
          <Badge
            pill
            bg="danger"
            style={{ position: "absolute", top: "10px", right: "10px" }}
          >
            {promotion ? "En promotion" : ""}
          </Badge>
        </h5>
      </div>

      <Card.Body>
        <Card.Title className="mb-0  p-2">{nomProduit}</Card.Title>
        <Row>{codeCategorie && <NomCategorie codeCategorie={codeCategorie} />}</Row>
        <Row className="p-2">{prix && <ListGroup.Item>{prix} CAD</ListGroup.Item>}</Row>
        <Row className="p-2">
          <Col xs={6}>
            <Button className="d-grid gap-2" size="lg" variant="outline-info">
              <Row><img src="/images/cart.png"  width="10" height="40" /></Row>
              <Row style={{fontSize: 10}}>Ajout Au Panier</Row>
            </Button>
          </Col>
          <Col xs={6}>
            <Button className="d-grid gap-2" size="lg" variant="outline-success">
              <Row><img src="/images/cartcheck.png"  width="40" height="40" /></Row>
              <Row style={{fontSize: 10}}>Achat Rapide</Row>
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default CarteProduit;
