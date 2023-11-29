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
import { useContext, useState } from "react";
import { AxiosContext } from "..";

function ModalSupprimer({ produit, show, onHide }) {
  const axios = useContext(AxiosContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Non", value: "1" },
    { name: "Oui", value: "2" },
  ];

  const handleModalModification = handleSubmit(async (data) => {
    const formData = new FormData();

    formData.append("files", data.imageProduit[0]);

    var test = await axios.put("/modificationProduit", formData);
  });

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      show={show}
      centered
    >
      <Modal.Header onClick={onHide} closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ alignContent: "center" }}
        >
          Suppression du produit: {produit.nomProduit}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleModalModification}>
          <Container style={{ width: "400px" }}>
            <Stack>
              {/* Input EN PROMOTION */}
              <Form.Group as={Col} controlId="promotion"></Form.Group>
              <Form.Label>
                Souhaitez-vous vraiment supprimer ce produit?
              </Form.Label>

              <Button
                type="submit"
                variant="danger"
                style={{ margin: "10px 0 0 0" }}
              >
                Oui
              </Button>
            </Stack>
          </Container>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalSupprimer;
