import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModelePage from "../layout/ModelePage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Badge, Button, Card, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function PagePanier() {
  const handleCheckout = () => {};
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Product name",
      description: "Brief description",
      price: 12.0,
      quantity: 1,
    },
    {
      id: 2,
      name: "Second product",
      description: "Brief description",
      price: 5.0,
      quantity: 1,
    },
    {
      id: 3,
      name: "Third item",
      description: "Brief description",
      price: 3.0,
      quantity: 1,
    },
  ]);

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const increaseQuantity = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const removeItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const navigate = useNavigate();
  return (
    <ModelePage>
      <Container>
        <Row>
          <Col xs={9}>
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart</span>
              <Badge pill bg="secondary" className="mr-3">
                {cart.length}
              </Badge>
            </h4>
          </Col>
        </Row>
        <Row>
          <Col xs={9}>
            <Card>
              <ListGroup variant="flush">
                {cart.map((item) => (
                  <ListGroup.Item
                    className="d-flex justify-content-between"
                    key={item.id}
                  >
                    <div>
                      <h6 style={{ fontSize: "20px" }} className="my-0">
                        {item.name}
                      </h6>

                      {/* <small className="text-muted">{item.description}</small> */}
                      <Button
                        variant="danger"
                        size="sm"
                        style={{ margin: "10px" }}
                        onClick={() => removeItem(item.id)}
                      >
                        Retirer
                      </Button>
                    </div>
                    <div>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        style={{ margin: "10px" }}
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </Button>
                      {item.quantity}
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        style={{ margin: "10px" }}
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </Button>

                      <span className="text-muted" style={{ fontSize: "20px" }}>
                        {item.price.toFixed(2)} $
                      </span>
                    </div>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item className="d-flex justify-content-between">
                  <span>Sous-total</span>
                  <strong>{cartTotal.toFixed(2)} $</strong>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Paiement</Card.Title>
                <Card.Text>
                  Sous-total ({cart.length} articles) : {cartTotal.toFixed(2)} $
                </Card.Text>
                <Button variant="primary" onClick={() => navigate("/paiement")}>
                  Passer la commande
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </ModelePage>
  );
}
export default PagePanier;