// Footer.js
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} OrthoBien-Être</p>
        <Container fluid>
          <Row>
            <Col>Accueil</Col>
          </Row>
          <Row>
            <Col>Contacts</Col>
          </Row>
          <Row>
            <Col>À Propos</Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
