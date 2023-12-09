import React, { useEffect, useState,useContext } from "react";
import { Badge, Button, Card, ListGroup, Stack } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import ModelePage from "../layout/ModelePage";
import { UserContext,AxiosContext } from "..";

function PagePanier() {
  const axios = useContext(AxiosContext);
  const user = useContext(UserContext);

  const [cart, setCart] = useState(localStorage.getItem("guestCartItems") ? JSON.parse((localStorage.getItem("guestCartItems")))  : []);

  const fetchUserCart = async () => {
    try {
      const userIdResponse = await axios.get(`/utilisateur/find/${user.courriel}`);
      const response = await axios.get(`/panier/${userIdResponse.data._id}`);
      localStorage.setItem('guestCartItems', JSON.stringify(response.data.articles));

    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  };

  const updateUserCart = async () => {
    try {
      const guestCartItems = JSON.parse(localStorage.getItem('guestCartItems'));
      const userIdResponse = await axios.get(`/utilisateur/find/${user.courriel}`);
      const response = await axios.put(`/panier/update/${userIdResponse.data._id}`, {guestCartItems});
      console.log(userIdResponse.data._id);
      console.log(guestCartItems);
      console.log(response.data.articles);
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  }

  // fetch cart from api or localStorage
  useEffect(() => {
    if(user) fetchUserCart();
    setCart(localStorage.getItem("guestCartItems") ? JSON.parse((localStorage.getItem("guestCartItems")))  : []);
  }, []);

  // update cart in localStorage or userCart
  useEffect(() => {
    localStorage.setItem('guestCartItems', JSON.stringify(cart));
    if(user) updateUserCart();
    
  }, [cart]);

  const cartTotal = cart
  ? cart.reduce((total, item) => total + item.prix * item.qtt, 0)
  : 0;

  const increaseQuantity = (itemId) => {
    const updatedCart = cart ? cart.map((item) =>
      item.codeProduit === itemId ? { ...item, qtt: item.qtt + 1 } : item
    ) : 0;
    setCart(updatedCart);
  };

  const decreaseQuantity = (itemId) => {
    const updatedCart = cart? cart.map((item) =>
    item.codeProduit === itemId && item.qtt > 1
        ? { ...item, qtt: item.qtt - 1 }
        : item
    ) : 0;

    setCart(updatedCart);
  };

  const removeItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.codeProduit !== itemId);
    setCart(updatedCart);
  };

  const cartSize = cart
  ? cart.reduce((size, item) => size + item.qtt, 0)
  : 0;

  const navigate = useNavigate();

  return (
    <ModelePage>
      <Container>
        <Row>
          <Col xs={9}>
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Votre panier</span>
              <Badge pill bg="secondary" className="mr-3">
                {cartSize}
              </Badge>
            </h4>
          </Col>
        </Row>
        <Row>
          <Col xs={9}>
            <Card>
              <ListGroup variant="flush">
          
                { cart && cart.map((item) => (
                  <ListGroup.Item
                    className="d-flex justify-content-between"
                    key={item.codeProduit}
                  >
                    <Stack
                      direction="horizontal"
                      gap={1}
                      style={{ justifyContent: "center", margin: "0px" }}
                    >
                      <Button
                        className="p-2"
                        variant="outline-danger"
                        size="sm"
                        style={{ margin: "10px" }}
                        onClick={() => removeItem(item.codeProduit)}
                      >
                        <img
                          style={{ width: "20px" }}
                          src="./images/delete-button.png"
                          alt="Delete"
                        />
                      </Button>
                      <img
                        className="p-2"
                        style={{ width: "80px" }}
                        src={`/images/produits/${item.codeProduit}.jpeg`}
                        alt="Produit"
                      />
                      <h6 style={{ fontSize: "20px" }} className="my-0 p-2">
                        {item.nomProduit}
                      </h6>

                      {/* <small className="text-muted">{item.description}</small> */}
                    </Stack>
                    <div>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        style={{ margin: "10px" }}
                        onClick={() => decreaseQuantity(item.codeProduit)}
                      >
                        -
                      </Button>
                      {item.qtt}
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        style={{ margin: "10px" }}
                        onClick={() => increaseQuantity(item.codeProduit)}
                      >
                        +
                      </Button>

                      <span className="text-muted" style={{ fontSize: "20px" }}>
                        {item.prix?.toFixed(2)} $
                        <span style={{ fontSize: "16px" }}> / unité</span>
                      </span>
                    </div>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item className="d-flex justify-content-between">
                  <span>Sous-total</span>
                  <strong>{cartTotal?.toFixed(2)} $</strong>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Paiement</Card.Title>
                <Card.Text>
                  Sous-total ({cart ? cart.length : 0} articles) : {cartTotal?.toFixed(2)} $
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() =>
                    navigate("/livraison", {
                      state: { total: cartTotal, cartItems: cart },
                    })
                  }
                >
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
