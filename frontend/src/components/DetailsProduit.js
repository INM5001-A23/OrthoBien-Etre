import React, { useState } from "react";
import { Button, Card, Col, Container, ListGroup, Row, Stack } from "react-bootstrap";
import Carrousel from "./Carrousel";
import CarteCommentaire from "./CarteCommentaire";
import "./DetailsProduit.css";
import Etoile from "./Etoile";
import FormulaireEvaluation from "./FormulaireEvaluation";
import NomCategorie from "./NomCategorie";

function DetailsProduit({
  produit: {
    nomProduit,
    codeProduit,
    description,
    codeCategorie,
    prix,
    evaluation,
  },
}) {
  const productDetails = {
    id: codeProduit,
    name: nomProduit,
    price: prix,
  };

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
    <Container>
            {notification && <div className="notification">{notification}</div>}
      <Row>
        <Col>
          <Carrousel
            images={[`/images/produits/${codeProduit}.jpeg`]}
            itemHeight="500px"
            className="product-images"
          />
        </Col>
        <Col style={{}}>
          <Card style={{ height: "auto" }}>
            <Card.Body
              style={{
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex" }}>
                <Etoile evaluation={evaluation} size="30" />
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Card.Link href="#">(0)</Card.Link>
                </div>
              </div>
              <Card.Title>{nomProduit}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {codeCategorie && (
                  <NomCategorie codeCategorie={codeCategorie} />
                )}
              </Card.Subtitle>
              {prix && <ListGroup.Item>{prix}</ListGroup.Item>}
              <Card.Subtitle className="mb-2 text-muted" />
              <Card.Text>{description}</Card.Text>
              <Stack
                direction="horizontal"
                gap={5}
                style={{ justifyContent: "center", margin: "0px" }}
              >
                <Button variant="outline-primary" onClick={addToCart}>Ajouter au panier</Button>
                <Button variant="outline-success">Acheter maintenant</Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Stack>
        <Row style={{ padding: "10px 0 20px 0" }}></Row>
        {/* TODO 
        Affiche sil y a des commentaires pour le produit */}
        <CarteCommentaire
          nomClient={"Nom du client"}
          titre={"Titre du commentaire"}
          commentaire={
            "Some quick example text to build on the card title and make up the bulk of the card's content."
          }
          evaluation={4}
        />
        <FormulaireEvaluation etoiles={"4"} />
      </Stack>
    </Container>
  );
}
export default DetailsProduit;