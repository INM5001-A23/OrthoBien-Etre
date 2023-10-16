import ModelePage from "../layout/ModelePage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Badge, Button, Card, ListGroup } from "react-bootstrap";

function PagePanier() {
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
                <Button variant="primary">Passer la commande</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </ModelePage>
  );
}

export default PagePanier;
