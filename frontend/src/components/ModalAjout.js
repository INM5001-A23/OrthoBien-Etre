import {
  Button,
  ButtonGroup,
  Container,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AxiosContext } from "..";

function ModalAjout({ show, onHide }) {
  const navigate = useNavigate();
  const axios = useContext(AxiosContext);
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const radios = [
    { name: "Non", value: false },
    { name: "Oui", value: true },
  ];

  const handleModalAjout = handleSubmit((data) => {
    axios
      .post("/nouveauProduit", data)
      .then(function (response) {
        if (response.status === 200) {
          navigate("/admin", { state: { status: "success" } });
        } else {
          // TODO afficher message erreur
        }
      })
      .catch(function (error) {
        // handle error
        // TODO afficher message erreur
        console.log(error);
      });
    console.log(data);
  });

  register("promotion", {
    value: false,
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
          Ajout d'un nouveau produit
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleModalAjout}>
          <Container style={{ width: "400px" }}>
            <Stack>
              {/* Input IMAGE DU PRODUIT */}
              <Form.Group as={Col} controlId="imageProduit"></Form.Group>
              <Form.Label>Image:</Form.Label>
              <Form.Control
                type="file"
                {...register("imageProduit", {
                  required: "Ce champ est obligatoire",
                })}
              />
              <p style={{ color: "red" }}>{errors.imageProduit?.message}</p>

              {/* Input NOM DU PRODUIT */}
              <Form.Group as={Col} controlId="nomProduit">
                <Form.Label>Nom du produit:</Form.Label>
                <Form.Control
                  type="text"
                  // value={produit.nomProduit}
                  {...register("nomProduit", {
                    required: "Ce champ est obligatoire",
                    pattern: {
                      value: /^[a-zA-ZÀ-ÖØ-öø-ÿ\s\p'-]+$/,
                      message: "Lettres de l'alphabet uniquement",
                    },
                    minLength: {
                      value: 3,
                      message: "Longueur minimale est de 3 caractères",
                    },
                  })}
                />
                <p style={{ color: "red" }}>{errors.nomProduit?.message}</p>
              </Form.Group>
              {/* Input DESCRIPTION */}
              <Form.Group as={Col} controlId="description">
                <Form.Label>Description:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={10}
                  {...register("description", {
                    required: "Ce champ est obligatoire",
                    minLength: {
                      value: 20,
                      message: "Longueur minimale est de 20 caractères",
                    },
                  })}
                />
              </Form.Group>
              <p style={{ color: "red" }}>{errors.description?.message}</p>
              {/* Input PRIX UNITAIRE */}
              <Form.Group as={Col} controlId="prix">
                <Form.Label>Prix unitaire:</Form.Label>
                <Form.Control
                  type="number"
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
              </Form.Group>
              {/* Input QUANTITE EN STOCK */}
              <Form.Group as={Col} controlId="quantite">
                <Form.Label>Quantité disponible:</Form.Label>
                <Form.Control
                  type="number"
                  {...register("quantite", {
                    required: "Ce champ est obligatoire",
                    min: {
                      value: 1,
                      message: "La quantité doit être d'au moins 1",
                    },
                  })}
                />
                <p style={{ color: "red" }}>{errors.quantite?.message}</p>
              </Form.Group>

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
                    checked={getValues("promotion") == radio.value}
                    onChange={(e) =>
                      setValue("promotion", e.currentTarget.value === "true", {
                        shouldValidate: true,
                      })
                    }
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
              <p style={{ color: "red" }}>{errors.promotion?.message}</p>

              <Button
                type="submit"
                variant="success"
                style={{ margin: "10px 0 0 0" }}
              >
                Créer le produit
              </Button>
            </Stack>
          </Container>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalAjout;
