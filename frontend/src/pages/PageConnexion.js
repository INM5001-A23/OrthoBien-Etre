import ModelePage from "../layout/ModelePage";
import Form from "react-bootstrap/Form";
import Button from "../components/Bouton";
import { useLocation, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { useContext } from "react";
import { AxiosContext } from "..";

import { useForm } from "react-hook-form";
import React from "react";
import { Alert } from "react-bootstrap";

function PageConnexion() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const status = state?.status;
  const axios = useContext(AxiosContext);

  const {
    register,
    handleSubmit,
    unregister,
    reset,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  React.useEffect(() => {}, [unregister]);

  const handleFormulaireConnexion = handleSubmit((data) => {
    axios
      .post("/connexion", data)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("token", res?.data?.token);
          navigate("/");
          navigate(0);
        } else {
          setError("backend", res?.data?.erreur);
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        setError("backend", { message: error.response?.data?.erreur });
      });
  });

  return (
    <ModelePage>
      <div className="d-flex flex-column align-items-center justify-content-center">
        {status === "success" && (
          <Alert variant="success">
            <Alert.Heading>Création de compte réussie!</Alert.Heading>
          </Alert>
        )}
        <h1 className="mb-3">Connexion</h1>
        <p className="mb-3 text-center">
          Veuillez entrer vos information si vous êtes déjà enregistré.
          <br></br>
          Sinon veuillez vous inscrire.
        </p>

        <Form
          className="w-25 mb-5"
          onSubmit={(e) => {
            e.preventDefault();
            clearErrors();
            handleFormulaireConnexion();
          }}
        >
          <Form.Group className="mb-3 mx-auto" controlId="courriel">
            <Form.Label>Adresse courriel</Form.Label>
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
          <Form.Group className="mb-3" controlId="mdp">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              type="password"
              {...register("mdp", {
                required: "Ce champ est obligatoire",
                pattern: {
                  // value:
                  //   /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
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
          <div className="d-grid gap-2">
            <Button variant="primary" type="submit" size="lg" className="w-100">
              Se connecter
            </Button>
            <Nav.Link onClick={() => navigate("/inscription")}>
              <Button variant="secondary" size="lg" className="w-100">
                S'inscrire
              </Button>
            </Nav.Link>
          </div>
          {errors?.backend && (
            <Alert
              variant="warning"
              style={{
                textAlign: "center",
                margin: "10px",
              }}
            >
              <Alert.Heading>{errors.backend?.message}</Alert.Heading>
            </Alert>
          )}

          {/* <p style={{ color: "red", textAlign: "center", fontSize: "1.5rem" }}>
            {errors.backend?.message}
          </p> */}
        </Form>
      </div>
    </ModelePage>
  );
}

export default PageConnexion;
