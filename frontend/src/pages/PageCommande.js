
import React from "react";
import ModelePage from "../layout/ModelePage";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLocation } from "react-router-dom";
import BouttonCommande from "../components/BouttonCommande"
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function PageCommande() {

  const location = useLocation();
  
  const totalAvantTaxes = location.state.total;
  const tps =totalAvantTaxes*(5/100);
  const tvq = totalAvantTaxes*(9.975/100);
  const fraisLivraison = totalAvantTaxes*(2/100);
  const totalApresTaxes = totalAvantTaxes + tvq + tps + fraisLivraison;

  return (
    <ModelePage>
      <Container>
        <h1>Récapitulatif de la commande</h1>
        <hr></hr>
        <div>
        <Row>
          <Col xs={8}>
            <h4> Details de la commande </h4>
           
          </Col>
          <Col>
            <PayPalScriptProvider options={{"client-id": "AaI3aP2GIIHpPJp05ca6a380uZLugk_tJHJOEqh3JRWxVsSlLNrwxX3vSB82f4cb6iSpJJdCU4hVFreb"}}>
            <Row className="p-2"><h3>Passer la commande</h3></Row>
              <Row>
                <Col>
                  <Row className="p-1">Sous-Total:</Row>
                  <Row className="p-1">Frais de Livraison:</Row>
                  <Row className="p-1">TPS:</Row>
                  <Row className="p-1">TVQ:</Row>
                  <Row className="fw-bolder p-1" style={{color:'#800020', borderTop: 'solid lightGray'}}>TOTAL:</Row>
                </Col>
                <Col className="">
                  <Row className="p-1 d-flex justify-content-end">{totalAvantTaxes.toFixed(2)} CAD</Row>
                  <Row className="d-flex justify-content-end p-1">{fraisLivraison.toFixed(2)} CAD</Row>
                  <Row className="d-flex justify-content-end p-1">{tps.toFixed(2)} CAD</Row>
                  <Row className="p-1 d-flex justify-content-end">{tvq.toFixed(2)} CAD</Row>
                  <Row className="d-flex justify-content-end p-1 fw-bolder" style={{color:'#800020', borderTop: 'solid lightGray'}}>{totalApresTaxes.toFixed(2)} CAD</Row>
                </Col>
                <hr></hr>
              </Row>
              <Row className=""><BouttonCommande type = "submit" total={totalApresTaxes} /></Row>
            </PayPalScriptProvider>
            
          </Col>
        </Row>
        </div>
        
      </Container>
    </ModelePage>
  );
}

export default PageCommande;
