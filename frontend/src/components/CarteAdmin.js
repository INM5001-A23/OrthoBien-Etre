import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import styles from "./Carte.module.css";
import React from "react";
import ModalModification from "./ModalModification";
import ModalSupprimer from "./ModalSupprimer";

function CarteAdmin({ produit }) {
  const [modalModifShow, setModalModifShow] = React.useState(false);
  const [modalSupprimerShow, setModalSupprimerShow] = React.useState(false);

  return (
    <Card style={{ width: "18rem", textAlign: "center" }}>
      <Card.Img
        className={styles["header-img"]}
        variant="top"
        src={`/images/produits/${produit.codeProduit}.jpeg`}
      />
      <Card.Body>
        <Card.Title>{produit.nomProduit}</Card.Title>
        <Button
          variant="outline-primary"
          onClick={() => setModalModifShow(true)}
        >
          Modifier
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button
          variant="outline-danger"
          onClick={() => setModalSupprimerShow(true)}
        >
          Supprimer
        </Button>
      </Card.Body>
      <ModalModification
        produit={produit}
        show={modalModifShow}
        onHide={() => setModalModifShow(false)}
      />
      <ModalSupprimer
        produit={produit}
        show={modalSupprimerShow}
        onHide={() => setModalSupprimerShow(false)}
      />
    </Card>
  );
}

export default CarteAdmin;
