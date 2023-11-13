import ModelePage from "../layout/ModelePage";
import Form from "react-bootstrap/Form";
import Button from "../components/Bouton";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { useContext } from "react";
import { AxiosContext } from "..";

import { useForm } from "react-hook-form";
import React from "react";

function PageConnexion() {
  const navigate = useNavigate();
  const axios = useContext(AxiosContext);

  const {
    register,
    handleSubmit,
    unregister,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  React.useEffect(() => {}, [unregister]);

  const handleFormulaireInscription = handleSubmit((data) => {
    axios
      .post("lien pour chercher donnees utilisateur")
      .then((response) => {
        console.log(response.data.utilisateur);
      })
      .catch((error) => {
        console.log(error);
      });
    // Appeller le backend
    // Si linscription fonctionne on redirige
    // navigate("/");
  });

  return (
    <ModelePage>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h1 className="mb-3">Connexion</h1>
        <p className="mb-3 text-center">
          Veuillez entrer vos information si vous êtes déjà enregistré.
          <br></br>
          Sinon veuillez vous inscrire.
        </p>

        <Form className="w-25 mb-5" onSubmit={handleFormulaireInscription}>
          <Form.Group className="mb-3 mx-auto" controlId="formBasicEmail">
            <Form.Label>Adresse courriel</Form.Label>
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

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control type="password" />
          </Form.Group>

          <div className="d-grid gap-2">
            <Nav.Link onClick={() => navigate("/admin")}>
              <Button variant="primary" size="lg" className="w-100">
                Se connecter
              </Button>
            </Nav.Link>
            {/* TODO 
          Si compte existant, redirection sur PageAccueil avec nom a cote du logo. 
          Si pas de compte, message erreur apparait*/}
            <Nav.Link onClick={() => navigate("/inscription")}>
              <Button variant="secondary" size="lg" className="w-100">
                S'inscrire
              </Button>
            </Nav.Link>
          </div>
        </Form>
      </div>
    </ModelePage>
  );
}

export default PageConnexion;
