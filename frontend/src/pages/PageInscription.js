import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import ModelePage from "../layout/ModelePage";
import Bouton from "../components/Bouton";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";

function PageInscription() {
  const navigate = useNavigate();
  return (
    <ModelePage>
      <h1 className="d-flex justify-content-center mb-3">
        Création d'un compte
      </h1>
      <Container className="d-flex justify-content-center">
        <Form>
          <Row className="mb-2">
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>Prénom</Form.Label>
              <Form.Control type="firstName" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="lastName" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridTelephone">
              <Form.Label>Téléphone</Form.Label>
              <Form.Control type="tel" placeholder="(000)-000-0000" />
            </Form.Group>
          </Row>

          <Row className="mb-2">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Courriel</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
          </Row>

          <Form.Group>
            <Form.Label>Adresse</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Ville</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Province</Form.Label>
              <Form.Select defaultValue="Choisir...">
                <option>Choisir...</option>
                <option>Québec</option>
                <option>Ontario</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Code Postal</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Nav.Link
            className="d-grid col-6 mx-auto mt-4 mb-4"
            onClick={() => navigate("/")}
          >
            <Bouton variant="outline-success" nom="Créer un compte" />
          </Nav.Link>
        </Form>
      </Container>
    </ModelePage>
  );
}

export default PageInscription;
