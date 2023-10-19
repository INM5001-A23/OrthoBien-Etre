import ModelePage from "../layout/ModelePage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Badge, Button, Card, ListGroup } from "react-bootstrap";
import PagePaiement from "./PagePaiement";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
import Bouton from "../components/Bouton";

function PagePanier() {
  const navigate = useNavigate();
  return (
    <ModelePage>
      <Container>
        <Row>
          <Col xs={9}>
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-muted">Your cart</span>
              <Badge pill bg="secondary" className="mr-3">
                3
              </Badge>
            </h4>
          </Col>
        </Row>
        <Row>
          <Col xs={9}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex justify-content-between">
                  <div>
                    <h6 class="my-0">Product name</h6>
                    <small class="text-muted">Brief description</small>
                  </div>
                  <span class="text-muted">12.00 $</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between">
                  <div>
                    <h6 class="my-0">Second product</h6>
                    <small class="text-muted">Brief description</small>
                  </div>
                  <span class="text-muted">5.00 $</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between">
                  <div>
                    <h6 class="my-0">Third item</h6>
                    <small class="text-muted">Brief description</small>
                  </div>
                  <span class="text-muted">3.00 $</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between">
                  <span>Sous-total</span>
                  <strong>20.00 $</strong>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Paiement</Card.Title>
                <Card.Text>Sous-total (3 articles) : 20.00 $</Card.Text>
                <Nav.Link onClick={() => navigate("/paiement")}>
                  <Bouton variant="secondary" size="lg" className="w-100">
                    Passer la commande
                  </Bouton>
                </Nav.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </ModelePage>
  );
}

export default PagePanier;
