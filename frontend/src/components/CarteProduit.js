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
        <Card.Title className="mb-0">{nomProduit}</Card.Title>
        <Row>{codeCategorie && <NomCategorie codeCategorie={codeCategorie} />}</Row>
        <Row>{prix && <ListGroup.Item>{prix}</ListGroup.Item>}</Row>
        <Row>
          <Col  xs={6}><Button style={{backgroundImage:"url('../../public/images/panier.svg')",backgroundSize:"cover", width:"40px", height:"40px"}}></Button></Col>
          <Col xs={6}><Button>Achat Rapide</Button></Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default CarteProduit;
