import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import "./Navigation.css";

function Navigation() {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Logo img="/bones.svg" />
        <Navbar.Brand>
          <Link to={"/"}>OrthoBien-Être</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link onClick={() => navigate("/catalogue")}>
              Catalogue
            </Nav.Link>
            <Nav.Link>
              <Link to={"/faq"}>F.A.Q.</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/contacts"}>Contacts</Link>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Logo img="/user.svg" path="/connexion" />
            <Logo img="/panier.svg" path="/panier" />
            <Form.Control
              type="search"
              placeholder="Recherche"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Soumettre</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
