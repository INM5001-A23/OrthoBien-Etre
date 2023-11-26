import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalModification({ produit, show, onHide }) {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      show={show}
      centered
    >
      <Modal.Header onClick={onHide} closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modification d'un produit
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{produit.nomProduit}</h4>
        <Button variant="outline-primary">Modifier</Button>
        <p>Description: {produit.description}</p>
        <p>Prix unitaire: {produit.prix}</p>
        <p>Quantité disponible: {produit.quantite}</p>
        <p>Promotion: {produit.promotion ? "Oui" : "Aucune promotion"}</p>
      </Modal.Body>
    </Modal>
  );
}

export default ModalModification;
