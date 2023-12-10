import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  Row,
  Stack,
} from "react-bootstrap";
import Carrousel from "./Carrousel";
import CarteCommentaire from "./CarteCommentaire";
import "./DetailsProduit.css";
import Etoile from "./Etoile";
import FormulaireEvaluation from "./FormulaireEvaluation";
import NomCategorie from "./NomCategorie";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AxiosContext } from "..";
import { UserContext } from "..";
import { calculMoyenneAvis } from "../utils";

function DetailsProduit({
  produit: {
    nomProduit,
    codeProduit,
    pDescription,
    description,
    codeCategorie,
    prix,
    images,
    promotion,
    avis,
  },
}) {
  const navigate = useNavigate();
  const axios = useContext(AxiosContext);
  const user = useContext(UserContext);
  const [produit, setProduit] = useState(null);

  useEffect(() => {
    axios
      .get(`/produits/${codeProduit}`)
      .then(function (response) {
        // handle success
        console.log(response);
        setProduit(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        if (error.response.status === 404) {
          navigate("/product-not-found");
        }
      })
      .finally(function () {
        // always executed
      });
  }, [axios]);

  const productDetails = {
    codeProduit: codeProduit,
    nomProduit: nomProduit,
    prix: prix,
  };

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
    <Container>
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
      <Row>
        <Col>
          <Carrousel images={images} />
        </Col>
        <Col>
          <Card style={{ height: "auto" }}>
            <Card.Body
              style={{
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex" }}>
                <Etoile evaluation={calculMoyenneAvis(avis)} size="30" />
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Card.Link href="#commentaires">({avis.length})</Card.Link>
                </div>
              </div>
              <Card.Title>{nomProduit}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {codeCategorie && (
                  <NomCategorie codeCategorie={codeCategorie} />
                )}
              </Card.Subtitle>
              <Stack direction="horizontal">
                {promotion ? (
                  <>
                    <ListGroup.Item
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        margin: "0 20px 0 0",
                      }}
                    >
                      {prix} CAD
                    </ListGroup.Item>
                    {prixBarre && (
                      <ListGroup.Item>
                        <del>{prixBarre} CAD</del>
                      </ListGroup.Item>
                    )}
                  </>
                ) : (
                  prixInitial && (
                    <ListGroup.Item>{prixInitial} CAD</ListGroup.Item>
                  )
                )}
              </Stack>
              <Card.Subtitle className="mb-2 text-muted" />
              <Card.Text>{pDescription}</Card.Text>
              <Card.Text>{description}</Card.Text>
              {(!user || user?.role !== "admin") && (
                <Stack
                  direction="horizontal"
                  gap={5}
                  style={{ justifyContent: "center", margin: "0px" }}
                >
                  <Button variant="outline-primary" onClick={addToCart}>
                    Ajouter au panier
                  </Button>
                  <Button variant="outline-success">Acheter maintenant</Button>
                </Stack>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{ padding: "10px 0 20px 0" }} className="mx-auto"></Row>
      <h3 id="commentaires" style={{ textAlign: "center" }}>
        Commentaires des clients
      </h3>
      <Stack gap={3} style={{ justifyContent: "center" }}>
        {avis.map(({ prenomClient, commentaire, note }) => (
          <CarteCommentaire
            nomClient={prenomClient}
            commentaire={commentaire}
            evaluation={note}
          />
        ))}
      </Stack>
      {user && user?.role !== "admin" ? (
        <FormulaireEvaluation codeProduit={codeProduit} />
      ) : (
        <div>non</div>
      )}
    </Container>
  );
}
export default DetailsProduit;
