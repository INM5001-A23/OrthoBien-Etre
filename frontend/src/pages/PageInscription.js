import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import ModelePage from "../layout/ModelePage";
import Button from "../components/Bouton";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { Container, Stack } from "react-bootstrap";

import { useForm } from "react-hook-form";
import React from "react";

function PageInscription() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    unregister,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      prenom: "",
      nom: "",
    },
  });

  React.useEffect(() => {}, [unregister]);

  const handleFormulaireInscription = handleSubmit((data) => {
    // Appeller le backend
    // Si linscription fonctionne on redirige
    // navigate("/");
  });

  return (
    <ModelePage>
      <h1 className="d-flex justify-content-center">Création d'un compte</h1>
      <Container className="d-flex justify-content-center ">
        <Form onSubmit={handleFormulaireInscription}>
          <Stack style={{ width: "450px" }}>
            {/* Input PRENOM */}
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>Prénom</Form.Label>
              <Form.Control
                {...register("prenom", {
                  required: "Ce champ est obligatoire",
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "Lettres de l'alphabet uniquement",
                  },
                  minLength: {
                    value: 4,
                    message: "Longueur minimale est de 4 caractères",
                  },
                })}
              />
              <p style={{ color: "red" }}>{errors.prenom?.message}</p>
            </Form.Group>

            {/* Input NOM */}
            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                {...register("nom", {
                  required: "Ce champ est obligatoire",
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "Lettres de l'alphabet uniquement",
                  },
                  minLength: {
                    value: 4,
                    message: "Longueur minimale est de 4 caractères",
                  },
                })}
              />
              <p style={{ color: "red" }}>{errors.nom?.message}</p>
            </Form.Group>

            {/* Input TELEPHONE */}
            <Form.Group as={Col} controlId="formGridTelephone">
              <Form.Label>Téléphone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="(000)-000-0000"
                name="telephone"
                {...register("telephone", {
                  required: "Ce champ est obligatoire",
                  pattern: {
                    value: /^\(\d{3}\)-\d{3}-\d{4}$/,
                    message: "Veuillez respecter le format: '(000)-000-0000'",
                  },
                })}
              />
              <p style={{ color: "red" }}>{errors.telephone?.message}</p>
            </Form.Group>

            {/* Input EMAIL */}
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Courriel</Form.Label>
              <Form.Control
                type="email"
                {...register("email", {
                  required: "Ce champ est obligatoire",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message:
                      "Veuillez respecter le format: 'nomutilisateur@domaine.com'",
                  },
                })}
              />
              <p style={{ color: "red" }}>{errors.email?.message}</p>
            </Form.Group>

            {/* Input MOT DE PASSE  */}
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                type="password"
                {...register("motDePasse", {
                  required: "Ce champ est obligatoire",
                  pattern: {
                    value:
                      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: (
                      <div>
                        <p>Le mot de passe doit contenir au moins:</p>
                        <ul>
                          <li>une lettre majuscule.</li>
                          <li>une lettre minuscule.</li>
                          <li>un chiffre.</li>
                          <li>un caractère spécial (@, $, !, %, *, ?, &).</li>
                          <li>6 caractères au minimum.</li>
                        </ul>
                      </div>
                    ),
                  },
                })}
              />
              <p style={{ color: "red" }}>{errors.motDePasse?.message}</p>
            </Form.Group>

            {/* Input RUE */}
            <h5>Adresse</h5>
            <Form.Group>
              <Form.Label>Rue</Form.Label>
              <Form.Control
                placeholder="1234 Main St"
                type="text"
                {...register("adresse", {
                  pattern: {
                    value: /^[A-Za-z0-9\s.,-]+$/,
                    message:
                      "Veuillez respecter le format: 'nomutilisateur@domaine.com'",
                  },
                })}
              />
            </Form.Group>

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
          </Stack>
        </Form>
      </Container>
    </ModelePage>
  );
}

export default PageInscription;
