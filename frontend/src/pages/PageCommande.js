
import React from "react";
import ModelePage from "../layout/ModelePage";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLocation } from "react-router-dom";
import BouttonCommande from "../components/BouttonCommande"
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function PageCommande() {

  const countries = [
    {
    value: "CA",
    text: "Canada"
    },
    {
    value: "MX",
    text: "Mexico"
    },
    {
    value: "US",
    text: "United States"
    }
]

  const location = useLocation();
  
  const totalAvantTaxes = location.state.total;
  const tps = 0;
  const tvq = 0;
  const fraisLivraison = 0;
  const totalApresTaxes = totalAvantTaxes + tvq + tps + fraisLivraison;

  return (
    <ModelePage>
      <Container>
        <h1>Passer la commande</h1>
        <hr></hr>
        <div>
        <Row>
          <Col>
            <h3> Informations de livraison </h3>
            <Form className="w-75 mb-5">
              <Form.Group className="mb-3 mx-auto" controlId="formBasicPrenom">
                <Form.Label>Prenom</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3 mx-auto" controlId="formBasicNom">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3 mx-auto" controlId="formBasicEmail">
                <Form.Label>Adresse courriel</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group className="mb-3 mx-auto" controlId="formBasicTel">
                <Form.Label>Numero de telephone</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <h4> Adresse de livraison et de facturation </h4>

              <Form.Group className="mb-3 mx-auto" controlId="formBasicTel">
                <Form.Label>No. et nom de la rue</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mb-3 mx-auto" controlId="formBasicTel">
                <Form.Label>Ville</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mb-3 mx-auto" controlId="formBasicTel">
                <Form.Label>Code Postal</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mb-3 mx-auto" controlId="formBasicTel">
                <Form.Label>Province</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3 mx-auto" controlId="formBasicTel">
                <Form.Label>Pays</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <PayPalScriptProvider options={{"client-id": "AaI3aP2GIIHpPJp05ca6a380uZLugk_tJHJOEqh3JRWxVsSlLNrwxX3vSB82f4cb6iSpJJdCU4hVFreb"}}>
            <h3>Récapitulatif de la commande</h3>
              <Row>
                <Col className="w-49">
                  <Row>Sous-Total:</Row>
                  <Row>Frais de Livraison:</Row>
                  <Row>TPS:</Row>
                  <Row>TVQ:</Row>
                  <Row>TOTAL:</Row>
                </Col>
                <Col className="w-49">
                <Row>{totalAvantTaxes}</Row>
                  <Row>{fraisLivraison}</Row>
                  <Row>{tps}</Row>
                  <Row>{tvq}</Row>
                  <Row>{totalApresTaxes}</Row>
                </Col>
              </Row>
              <Row><BouttonCommande total={totalApresTaxes} /></Row>
            </PayPalScriptProvider>
            
          </Col>
        </Row>
        </div>
        
      </Container>
    </ModelePage>
  );
}

export default PageCommande;
