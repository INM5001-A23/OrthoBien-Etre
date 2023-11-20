import ListGroup from "react-bootstrap/ListGroup";
import styles from "./Carte.module.css";
import { Link, useNavigate } from "react-router-dom";
import NomCategorie from "./NomCategorie";
import { Badge, Button, Row, Col, Card, Stack } from "react-bootstrap";

function CarteProduit({
  produit: { codeProduit, img, nomProduit, codeCategorie, prix, promotion },
  achat = false,
}) {
  const navigate = useNavigate();
  return (
    <Card
      style={{
        width: "18rem",
        textAlign: "center",
        cursor: "pointer"
      }}
    >
      <div style={{ position: "relative", display: "inline-block" }} onClick={() => navigate(`/produit/${codeProduit}`)}>
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

      <Card.Body onClick={() => navigate(`/produit/${codeProduit}`)}>
        <Card.Title className="mb-0  p-2">{nomProduit}</Card.Title>
        <Row>{codeCategorie && <NomCategorie codeCategorie={codeCategorie} />}</Row>
        <Row className="p-2">{prix && <ListGroup.Item>{prix} CAD</ListGroup.Item>}</Row>
        <Row className="p-2">
          <Col xs={6}>
            <Button className="d-grid gap-2" size="lg" variant="outline-info" onClick={addToCart}>
              <Row><img src="/images/cart.png"  width="10" height="40" /></Row>
              <Row style={{fontSize: 10}}>Ajout Au Panier</Row>
            </Button>
          </Col> 
            <Button className="d-grid gap-2" size="lg" variant="outline-success">
          <Col xs={6}>
              <Row><img src="/images/cartcheck.png"  width="40" height="40" /></Row>
              <Row style={{fontSize: 10}}>Achat Rapide</Row>
            </Button>
          </Col>
        </Row>
      </Card.Body>
      <Row className="p-2 mb-3">
          <Stack
                direction="horizontal"
                gap={1}
                style={{ justifyContent: "center", margin: "0px" }}
              >
                <Button variant="outline-primary">Ajout Au Panier</Button>
                <Button variant="outline-success" onClick={() => navigate("/commande", {state: {total: prix, cartItems: []}})}>Achat Rapide</Button>
              </Stack>
        </Row>
    </Card>
  );
}

export default CarteProduit;
