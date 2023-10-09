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
              <Form.Control
                type="firstName"
                placeholder="Entrez votre prénom"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="lastName" placeholder="Entrez votre nom" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Téléphone</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Row>

          <Row className="mb-2">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Row>

          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
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
            class="d-grid col-6 mx-auto mt-4"
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
