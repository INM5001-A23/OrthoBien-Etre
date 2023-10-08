import ModelePage from "../layout/ModelePage";
import Form from "react-bootstrap/Form";
import "./PageConnexion.css";
import Bouton from "../components/Bouton";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function PageConnexion() {
  const navigate = useNavigate();
  return (
    <ModelePage>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Nav.Link onClick={() => navigate("/")}>
          {/* TODO 
          Si compte existant, redirection sur PageAccueil avec nom a cote du logo. 
          Si pas de compte, message erreur apparait*/}

          <Bouton variant="primary" nom="Se connecter" />
        </Nav.Link>

        <Nav.Link onClick={() => navigate("/inscription")}>
          <Bouton variant="outline-success" nom="S'inscrire" />
        </Nav.Link>
      </Form>
    </ModelePage>
  );
}

export default PageConnexion;