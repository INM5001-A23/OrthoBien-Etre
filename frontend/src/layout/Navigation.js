import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { UserContext } from "..";
import Logo from "../components/Logo";
import { SearchResultsList } from "../components/SearchResultsList";
import { SearchBar } from "../components/searchbar";
import "./Navigation.module.css";

function Navigation() {
  const navigate = useNavigate();
  const user = useContext(UserContext);
  const [results, setResults] = useState([]);

  // gestion deconnexion
  const onDeconnexionClick = () => {
    localStorage.removeItem("guestCartItems");
    localStorage.removeItem("token");
    navigate("/");
    navigate(0);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
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
            style={{ maxHeight: "100px"}}
            navbarScroll
          >
            <Nav.Link onClick={() => navigate("/catalogue")}>
              Catalogue
            </Nav.Link>
          </Nav>
          
          <Row className="d-flex">
            <Col>
              {user && (
                <div style={{ paddingTop:"10px", whiteSpace: "nowrap"}}>
                 <p>Bienvenue {user?.prenom || "Admin"}</p>
                </div>
              )}
              {user && user?.role === "admin" && (
                <Logo img="/images/inventaire.svg" path="/admin" />
              )}
            </Col>
            <Col>
              <Logo
                  img="/images/user.svg"
                  path={user ? "/compte" : "/connexion"}
                />
            </Col>
            <Col>
              {(!user || user?.role !== "admin") && (
                    <Logo img="/images/panier.svg" path="/panier" />
                  )}
            </Col>
            
            <Col>
            {user && (
              <Button
                variant="outline-danger"
                size="sm"
                style={{
                  height: "70%",
                  alignSelf: "center",
                  marginTop:"5px"
                }}
                onClick={onDeconnexionClick}
              >
                Déconnexion
              </Button>
            )}
            </Col>
            <Col>
              <div className="me-2">
                <SearchBar setResults={setResults} />
                {results && results.length > 0 && (
                  <SearchResultsList results={results} />
                )}
              </div>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
