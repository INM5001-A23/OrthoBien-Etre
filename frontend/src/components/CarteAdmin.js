import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import styles from "./Carte.module.css";
import React from "react";
import ModalModification from "./ModalModification";

function CarteAdmin({ produit }) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Card style={{ width: "18rem", textAlign: "center" }}>
      <Card.Img
        className={styles["header-img"]}
        variant="top"
        src={`/images/produits/${produit.codeProduit}.jpeg`}
      />
      <Card.Body>
        <Card.Title>{produit.nomProduit}</Card.Title>
        <Button variant="outline-primary" onClick={() => setModalShow(true)}>
          Modifier
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button variant="outline-danger">Supprimer</Button>
      </Card.Body>
      <ModalModification
        produit={produit}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Card>
  );
}

export default CarteAdmin;
