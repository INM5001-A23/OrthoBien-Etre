import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import "./Navigation.module.css";
import { useContext } from "react";
import { UserContext } from "..";
import { SearchBar } from "../components/searchbar";
import { SearchResultsList } from "../components/SearchResultsList";
import React, { useState } from "react"; 


function Navigation() {
  const navigate = useNavigate();
  const user = useContext(UserContext);
  const [results, setResults] = useState([]);

  const onDeconnexionClick = () => {
    localStorage.removeItem("token");
    navigate(0);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container
        fluid
        style={{
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Logo img="/images/bones.svg" path="/" />
        <Navbar.Brand>
          <Nav.Link onClick={() => navigate("/")}>OrthoBien-Être</Nav.Link>
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
            <Nav.Link onClick={() => navigate("/faq")}>F.A.Q.</Nav.Link>
            <Nav.Link onClick={() => navigate("/contacts")}>Contacts</Nav.Link>
          </Nav>
          <Form className="d-flex">
            {user && (
              <div style={{ padding: "0 10px 0 10px" }}>
                Bienvenue {user?.prenom || "Admin"}
              </div>
            )}
            {user && user?.role === "admin" && (
              <Logo img="/images/inventaire.svg" path="/admin" />
            )}
            <Logo
              img="/images/user.svg"
              path={user ? "/compte" : "/connexion"}
            />
            {(!user || user?.role !== "admin") && (
              <Logo img="/images/panier.svg" path="/panier" />
            )}

            <div>
             <SearchBar setResults={setResults} />
            {results && results.length > 0 && <SearchResultsList results={results} />}

            </div>
            {/* <Form.Control
              type="search"
              placeholder="Recherche"
              className="me-2"
              aria-label="Search"
              style={{
                alignSelf: "center",
              }}
            /> */}
            <Button
              variant="outline-success"
              size="sm"
              style={{
                height: "10%",
                alignSelf: "center",
                margin: "0 5px 0 0",
              }}
            >
              Soumettre
            </Button> 
            {user && (
              <Button
                variant="outline-danger"
                size="sm"
                style={{
                  height: "10%",
                  alignSelf: "center",
                }}
                onClick={onDeconnexionClick}
              >
                Déconnexion
              </Button>
            )}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
