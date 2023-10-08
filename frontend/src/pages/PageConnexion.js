import ModelePage from "../layout/ModelePage";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./PageConnexion.css";
import Bouton from "../components/Bouton";

function PageConnexion() {
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
        <Bouton variant="primary" nom="Se connecter" />
        <Bouton variant="outline-success" nom="S'inscrire" />
      </Form>
    </ModelePage>
  );
}

export default PageConnexion;
