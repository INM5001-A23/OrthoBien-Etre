import ModelePage from "../layout/ModelePage";
import Form from "react-bootstrap/Form";
import Bouton from "../components/Bouton";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";

function PageConnexion() {
  const navigate = useNavigate();
  return (
    <ModelePage>
      <h1 className="d-flex justify-content-center mb-3">Connexion</h1>
      <p className="d-flex justify-content-center mb-3">
        Veuillez entrer vos information si vous êtes déjà enregistré. <br></br>
        Sinon veuillez vous inscrire.
      </p>
      <Container className="d-flex justify-content-center">
        <Form className="w-25 mb-5">
          <Form.Group className="mb-3 mx-auto" controlId="formBasicEmail">
            <Form.Label>Adresse courriel</Form.Label>
            <Form.Control type="email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control type="password" />
          </Form.Group>

          <Nav.Link
            className="d-grid col-6 mx-auto mt-4"
            onClick={() => navigate("/")}
          >
            {/* TODO 
          Si compte existant, redirection sur PageAccueil avec nom a cote du logo. 
          Si pas de compte, message erreur apparait*/}

            <Bouton variant="primary" nom="Se connecter" />
          </Nav.Link>

          <Nav.Link
            className="d-grid col-6 mx-auto mt-3 mb-5"
            onClick={() => navigate("/inscription")}
          >
            <Bouton variant="outline-success" nom="S'inscrire" />
          </Nav.Link>
        </Form>
      </Container>
    </ModelePage>
  );
}

export default PageConnexion;
