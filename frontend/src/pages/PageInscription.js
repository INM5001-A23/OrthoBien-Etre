import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import ModelePage from "../layout/ModelePage";
import Button from "../components/Bouton";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";

import { useForm } from "react-hook-form";

function PageInscription() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      prenom: "",
      nom: "",
      mode: "onChange",
    },
  });

  const handleFormulaireInscription = handleSubmit((data) => {
    // Appeller le backend
    // Si linscription fonctionne on redirige
    // navigate("/");
  });

  return (
    <ModelePage>
      <h1 className="d-flex justify-content-center mb-3">
        Création d'un compte
      </h1>
      <Container className="d-flex justify-content-center">
        <Form onSubmit={handleFormulaireInscription}>
          <Row className="mb-2">
            {/* Input prenom */}
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>Prénom</Form.Label>
              <Form.Control
                {...register("prenom", {
                  required: "Ce champ est obligatoire",
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "Lettres de l'alphabet uniquement",
                  },
                })}
              />
              <p style={{ color: "red" }}>{errors.prenom?.message}</p>
            </Form.Group>

            {/* Input nom */}
            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                {...register(
                  "nom",
                  {
                    required: "Ce champ est obligatoire",
                    minLength: {
                      value: 4,
                      message: "Longueur minimale est de 4 caracteres",
                    },
                  },
                  { pattern: /^[A-Za-z]+$/i }
                )}
              />
              <p style={{ color: "red" }}>{errors.nom?.message}</p>
            </Form.Group>

            {/* Input telephone */}
            <Form.Group as={Col} controlId="formGridTelephone">
              <Form.Label>Téléphone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="(000)-000-0000"
                name="telephone"
                {...register("telephone", {
                  pattern: /^\(\d{3}\)-\d{3}-\d{4}$/,
                })}
              />
            </Form.Group>
          </Row>

          <Row className="mb-2">
            {/* Input courriel */}
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Courriel</Form.Label>
              <Form.Control
                type="email"
                {...register("email", {
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                })}
              />
            </Form.Group>

            {/* Input mot de passe */}
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control type="password" {...register("motDePasse")} />
            </Form.Group>
          </Row>

          {/* Input adresse */}
          <Form.Group>
            <Form.Label>Adresse</Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              type="text"
              {...register("adresse")}
            />
          </Form.Group>

          <Row>
            {/* Input ville */}
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Ville</Form.Label>
              <Form.Control type="text" {...register("ville")} />
            </Form.Group>

            {/* Input province */}
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Province</Form.Label>
              <Form.Select defaultValue="Choisir..." {...register("province")}>
                <option>Choisir...</option>
                <option>Québec</option>
                <option>Ontario</option>
              </Form.Select>
            </Form.Group>

            {/* Input code postal */}
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Code Postal</Form.Label>
              <Form.Control type="text" {...register("codePostal")} />
            </Form.Group>
          </Row>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px",
            }}
          >
            <Button type="submit" variant="outline-success">
              Créer un compte
            </Button>
          </div>
        </Form>
      </Container>
    </ModelePage>
  );
}

export default PageInscription;
