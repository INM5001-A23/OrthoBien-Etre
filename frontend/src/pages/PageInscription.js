import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import ModelePage from "../layout/ModelePage";
import Button from "../components/Bouton";
import { useNavigate } from "react-router-dom";

import { Container, Stack } from "react-bootstrap";

import { useForm } from "react-hook-form";
import React, { useContext } from "react";
import { AxiosContext } from "..";

function PageInscription() {
  const navigate = useNavigate();
  const axios = useContext(AxiosContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      prenom: "",
      nom: "",
    },
  });

  const handleFormulaireInscription = handleSubmit((data) => {
    axios
      .post("/inscription", data)
      .then(function (response) {
        if (response.status === 200) {
          navigate("/connexion", { state: { status: "success" } });
        } else {
          // TODO afficher message erreur
        }
      })
      .catch(function (error) {
        // handle error
        // TODO afficher message erreur
        console.log(error);
      });
  });

  return (
    <ModelePage>
      <h1 className="d-flex justify-content-center">Création d'un compte</h1>
      <Container className="d-flex justify-content-center ">
        <Form onSubmit={handleFormulaireInscription}>
          <Stack style={{ width: "450px" }}>
            {/* Input EMAIL */}
            <Form.Group as={Col} controlId="courriel">
              <Form.Label>Courriel</Form.Label>
              <Form.Control
                type="email"
                {...register("courriel", {
                  required: "Ce champ est obligatoire",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message:
                      "Veuillez respecter le format: 'nomutilisateur@domaine.com'",
                  },
                })}
              />
              <p style={{ color: "red" }}>{errors.courriel?.message}</p>
            </Form.Group>

            {/* Input PRENOM */}
            <Form.Group as={Col} controlId="prenom">
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
            <Form.Group as={Col} controlId="nom">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
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
            <Form.Group as={Col} controlId="telephone">
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

            {/* Input MOT DE PASSE  */}
            <Form.Group as={Col} controlId="mdp">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                type="password"
                {...register("mdp", {
                  required: "Ce champ est obligatoire",
                  pattern: {
                    value:
                      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: "error",
                  },
                })}
              />
              <p style={{ color: "red" }}>
                {errors.mdp?.message === "error" && (
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
                )}
              </p>
            </Form.Group>

            <h5>Adresse</h5>
            {/* Input RUE */}
            <Form.Group as={Col} controlId="rue">
              <Form.Label>Rue</Form.Label>
              <Form.Control
                placeholder="1234 Main St"
                type="text"
                {...register("rue", {
                  pattern: {
                    value: /^[A-Za-z0-9\s.,-]+$/,
                    message:
                      "Veuillez respecter le format: 'nomutilisateur@domaine.com'",
                  },
                  minLength: {
                    value: 4,
                    message: "Longueur minimale est de 4 caractères",
                  },
                })}
              />
              <p style={{ color: "red" }}>{errors.rue?.message}</p>
            </Form.Group>

            {/* Input VILLE */}
            <Form.Group as={Col} controlId="ville">
              <Form.Label>Ville</Form.Label>
              <Form.Control
                type="text"
                {...register("ville", {
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
              <p style={{ color: "red" }}>{errors.ville?.message}</p>
            </Form.Group>

            {/* Input PROVINCE */}
            <Form.Group as={Col} controlId="province">
              <Form.Label>Province</Form.Label>
              <Form.Select
                {...register("province", {
                  required: "Veuillez choisir une option",
                })}
              >
                <option>Québec</option>
                <option>Ontario</option>
              </Form.Select>
              <p style={{ color: "red" }}>{errors.province?.message}</p>
            </Form.Group>

            {/* Input CODE POSTAL */}
            <Form.Group as={Col} controlId="codePostal">
              <Form.Label>Code Postal</Form.Label>
              <Form.Control
                type="text"
                {...register("codePostal", {
                  required: "Ce champ est obligatoire",
                  pattern: {
                    value: /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/,
                    message: "Veuillez respecter ce format: 'V7X 1L7'",
                  },
                })}
              />
              <p style={{ color: "red" }}>{errors.codePostal?.message}</p>
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
