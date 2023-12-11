import ModelePage from "../layout/ModelePage";
import CarteProduit from "../components/CarteProduit";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {  useEffect  } from "react";
import {  Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function Recherche  ({ }){
  
  const location = useLocation();
 
  const results = location.state.total;
  

  useEffect(() => {
    


    if (results && results.length > 0) {
      
      return;
    }

}, [ results]);


  return (
    <ModelePage>
      <Container>
        <h2 className="p-3">
          Résultat de la recherche
        </h2>
        <Row xs={1} md={4} className="g-4 justify-content-center">
          {results && results
            .map((produit) => (
              <Col xs="auto" md="auto" key={produit._id}>
                <CarteProduit produit={produit} achat />
              </Col>
            ))
            .slice(0, 15)}
        </Row>
      </Container>
    </ModelePage>
  );
}



export default Recherche;
