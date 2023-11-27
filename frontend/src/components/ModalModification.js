import {
  Button,
  ButtonGroup,
  Container,
  Stack,
  ToggleButton,
} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { useState } from "react";

function ModalModification({ produit, show, onHide }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Non", value: "1" },
    { name: "Oui", value: "2" },
  ];

  const handleModalModification = handleSubmit((data) => {
    console.log(data);
    // axios
    //   .post("/inscription", data)
    //   .then(function (response) {
    //     if (response.status === 200) {
    //       navigate("/connexion", { state: { status: "success" } });
    //     } else {
    //       // TODO afficher message erreur
    //     }
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     // TODO afficher message erreur
    //     console.log(error);
    //   });
  });

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      show={show}
      centered
    >
      <Modal.Header onClick={onHide} closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {produit.nomProduit}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleModalModification}>
          <Container style={{ width: "400px" }}>
            <Stack>
              {/* Input NOM DU PRODUIT */}
              <Form.Group as={Col} controlId="nomProduit"></Form.Group>
              <Form.Label>Nom du produit:</Form.Label>
              <Form.Control
                type="text"
                value={produit.nomProduit}
                {...register("nomProduit", {
                  required: "Ce champ est obligatoire",
                  pattern: {
                    value: /^[a-zA-ZÀ-ÖØ-öø-ÿ\s\p{P}'-]+$/,
                    message: "Lettres de l'alphabet uniquement",
                  },
                  minLength: {
                    value: 5,
                    message: "Longueur minimale est de 5 caractères",
                  },
                })}
              />
              <p style={{ color: "red" }}>{errors.nomProduit?.message}</p>
              {/* Input DESCRIPTION */}
              <Form.Group as={Col} controlId="description"></Form.Group>
              <Form.Label>Description:</Form.Label>
              <Form.Control
                as="textarea"
                rows={10}
                value={produit.description}
                {...register("description", {
                  required: "Ce champ est obligatoire",
                  minLength: {
                    value: 20,
                    message: "Longueur minimale est de 20 caractères",
                  },
                })}
              />
              <p style={{ color: "red" }}>{errors.description?.message}</p>
              {/* Input PRIX UNITAIRE */}
              <Form.Group as={Col} controlId="prix"></Form.Group>
              <Form.Label>Prix unitaire:</Form.Label>
              <Form.Control
                type="number"
                value={produit.prix}
                {...register("prix", {
                  required: "Ce champ est obligatoire",
                  pattern: {
                    value: /^(0(?!\.00)|[1-9]\d{0,6})\.\d{2}$/,
                    message:
                      "Veuillez entrer un nombre avec 2 decimales ex: '1,00'",
                  },
                })}
              />
              <p style={{ color: "red" }}>{errors.prix?.message}</p>
              {/* Input QUANTITE EN STOCK */}
              <Form.Group as={Col} controlId="quantite"></Form.Group>
              <Form.Label>Quantité disponible:</Form.Label>
              <Form.Control
                type="number"
                value={produit.quantite}
                {...register("quantite", {
                  required: "Ce champ est obligatoire",
                  pattern: {
                    value: /^(?:[0-9]|[1-4][0-9]|50)$/,
                    message: "Veuillez entrer un nombre entre 0 et 50",
                  },
                })}
              />
              <p style={{ color: "red" }}>{errors.qunatite?.message}</p>

              {/* Input EN PROMOTION */}
              <Form.Group as={Col} controlId="promotion"></Form.Group>
              <Form.Label>En promotion:</Form.Label>

              <ButtonGroup>
                {radios.map((radio, idx) => (
                  <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant={idx % 2 ? "outline-primary" : "outline-secondary"}
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
              <Button
                type="submit"
                variant="success"
                style={{ margin: "10px 0 0 0" }}
              >
                Enregistrer les modifications
              </Button>
            </Stack>
          </Container>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalModification;
