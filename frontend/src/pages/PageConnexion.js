import ModelePage from "../layout/ModelePage";
import Form from "react-bootstrap/Form";
import Button from "../components/Bouton";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function PageConnexion() {
  const navigate = useNavigate();
  return (
    <ModelePage>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h1 className="mb-3">Connexion</h1>
        <p className="mb-3 text-center">
          Veuillez entrer vos information si vous êtes déjà enregistré.{" "}
          <br></br>
          Sinon veuillez vous inscrire.
        </p>

        <Form className="w-25 mb-5">
          <Form.Group className="mb-3 mx-auto" controlId="formBasicEmail">
            <Form.Label>Adresse courriel</Form.Label>
            <Form.Control type="email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control type="password" />
          </Form.Group>

          <div className="d-grid gap-2">
            <Nav.Link onClick={() => navigate("/")}>
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
