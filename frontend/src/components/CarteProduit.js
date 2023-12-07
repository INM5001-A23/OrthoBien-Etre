import { default as React, useState } from "react";
import { Alert, Badge, Button, Card, Row, Stack } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";
import styles from "./Carte.module.css";
import NomCategorie from "./NomCategorie";
import { useContext } from "react";
import { UserContext } from "..";

function CarteProduit({
  produit: { codeProduit, nomProduit, codeCategorie, prix, promotion },
}) {
  const navigate = useNavigate();
  const productDetails = {
    id: codeProduit,
    name: nomProduit,
    price: prix,
  };

  const user = useContext(UserContext);

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("guestCartItems")) !== null
      ? JSON.parse(localStorage.getItem("guestCartItems"))
      : []
  );

  const [notification, setNotification] = useState(null);

  const addToCart = () => {
    const existingProduct = cart.find((item) => item.id === productDetails.id);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === productDetails.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
      localStorage.setItem("guestCartItems", JSON.stringify(updatedCart));
    } else {
      const updatedCart = [...cart, { ...productDetails, quantity: 1 }];
      setCart(updatedCart);
      localStorage.setItem("guestCartItems", JSON.stringify(updatedCart));
    }

    setNotification(`${nomProduit} a été ajouté au panier`);

    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };
  return (
    <Card
      style={{
        width: "18rem",
        textAlign: "center",
        cursor: "pointer",
        position: "relative"
      }}
    >
      {notification && (
        <Alert
          variant="success"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1,
          }}
        >
          {notification}
        </Alert>
      )}

      <div
        style={{ position: "relative", display: "inline-block" }}
        onClick={() => navigate(`/produit/${codeProduit}`)}
      >
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
        <Row>
          {codeCategorie && <NomCategorie codeCategorie={codeCategorie} />}
        </Row>
        <Row className="p-2">
          {prix && <ListGroup.Item>{prix} CAD</ListGroup.Item>}
        </Row>
      </Card.Body>
      <Row className="p-2 mb-3">
        <Stack
          direction="horizontal"
          gap={1}
          style={{ justifyContent: "center" }}
        >
          {(!user || user?.role !== "admin") && (
            <div>
              <Button
                variant="outline-primary"
                onClick={addToCart}
                style={{ margin: "5px" }}
              >
                Ajout Panier
              </Button>

              <Button
                variant="outline-success"
                onClick={() =>
                  navigate("/commande", {
                    state: { total: prix, cartItems: [] },
                  })
                }
              >
                Achat Rapide
              </Button>
            </div>
          )}
        </Stack>
      </Row>
    </Card>
  );
}

export default CarteProduit;