import React from "react";
import ModelePage from "../layout/ModelePage";
import { Container } from "react-bootstrap";
import { useLocation,useNavigate } from "react-router-dom";

const Confirmation = () => {
    const location = useLocation();     
    const navigate = useNavigate();

    const messageConfirmation = "Votre commande de: " + location.state.total + " a été complété!";

    return(
        <ModelePage>
            <Container>
               <h2>{messageConfirmation}</h2> 
               <h3  style={ {cursor: "pointer",textDecorationLine: 'underline'}} onClick={() => navigate("/")}>Retourner Magasiner</h3>
            </Container>
        </ModelePage>
    )
}

export default Confirmation;