import ModelePage from "../layout/ModelePage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PagePanier() {
  return (
    <ModelePage>
      <Container className="border">
        <Row>
          <h1>Mon panier</h1>
          <Col className="h-100 d-inline-block" xs={12} md={8}>
            {/* TODO mettre article */}
          </Col>
          <Col xs={6} md={4}>
            <div>Sommaire de la commande</div>
            <Container className="border">
              <Row>
                <Col>Sous-total</Col>
                <Col>2 of 2</Col>
              </Row>
              <Row className="border-top">
                <Col>1 of 2</Col>
                <Col>2 of 2</Col>
              </Row>
              <Row className="border-top">
                <Col>1 of 2</Col>
                <Col>2 of 2</Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </ModelePage>
  );
}

export default PagePanier;
