import { default as React, useContext, useState } from "react";
import { Alert, Badge, Button, Card, Row, Stack } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";
import { UserContext } from "..";
import { calculMoyenneAvis, convertToDataUrl } from "../utils";
import styles from "./Carte.module.css";
import Etoile from "./Etoile";
import NomCategorie from "./NomCategorie";

function CarteProduit({
  produit: {
    codeProduit,
    nomProduit,
    codeCategorie,
    prix,
    promotion,
    populaire,
    images,
    avis,
  },
}) {
  const navigate = useNavigate();
  const productDetails = {
    codeProduit: codeProduit,
    nomProduit: nomProduit,
    prix: prix,
    images: images
  };
  const user = useContext(UserContext);

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("guestCartItems")) !== null
      ? JSON.parse(localStorage.getItem("guestCartItems"))
      : []
  );

  const [notification, setNotification] = useState(null);

  const addToCart = () => {
    const existingProduct = cart.find(
      (item) => item.codeProduit === productDetails.codeProduit
    );

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.codeProduit === productDetails.codeProduit
          ? { ...item, qtt: item.qtt + 1 }
          : item
      );
      setCart(updatedCart);
      localStorage.setItem("guestCartItems", JSON.stringify(updatedCart));
    } else {
      const updatedCart = [...cart, { ...productDetails, qtt: 1 }];
      setCart(updatedCart);
      localStorage.setItem("guestCartItems", JSON.stringify(updatedCart));
    }

    setNotification(`${nomProduit} a été ajouté au panier`);

    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const prixInitial = prix || 0;
  const prixBarre = promotion ? (prixInitial * 1.15).toFixed(2) : "";

  return (
    <Card
      style={{
        width: "18rem",
        textAlign: "center",
        cursor: "pointer",
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
          src={images && convertToDataUrl(images[0])}
        />
        <h5>
          <Badge
            pill
            bg="danger"
            style={{ position: "absolute", top: "10px", right: "10px" }}
          >
            {promotion ? "En promotion" : ""}
          </Badge>
          <Badge
            pill
            bg="info"
            text="dark"
            style={{
              position: "absolute",
              top: "40px",
              right: "10px",
            }}
          >
            {populaire ? "Produit populaire!" : ""}
          </Badge>
        </h5>
      </div>

      <Card.Body onClick={() => navigate(`/produit/${codeProduit}`)}>
        <Card.Title className="mb-0  p-2">{nomProduit}</Card.Title>
        <Row>
          {codeCategorie && <NomCategorie codeCategorie={codeCategorie} />}
        </Row>
        <Stack direction="horizontal">
          {promotion ? (
            <>
              <ListGroup.Item
                className="mx-auto"
                style={{ color: "red", fontWeight: "bold" }}
              >
                {prix} CAD
              </ListGroup.Item>
              {prixBarre && (
                <ListGroup.Item className="mx-auto">
                  <del>{prixBarre} CAD</del>
                </ListGroup.Item>
              )}
            </>
          ) : (
            prixInitial && (
              <ListGroup.Item className="mx-auto">
                {prixInitial} CAD
              </ListGroup.Item>
            )
          )}
        </Stack>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Etoile evaluation={avis && calculMoyenneAvis(avis)} size="25" />

          <Card.Link href="#commentaires">({avis.length})</Card.Link>
        </div>
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
