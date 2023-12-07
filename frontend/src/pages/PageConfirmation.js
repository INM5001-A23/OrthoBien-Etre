import {React, useContext, useEffect} from "react";
import ModelePage from "../layout/ModelePage";
import { Container, Stack } from "react-bootstrap";
import { useLocation,useNavigate } from "react-router-dom";
import { UserContext,AxiosContext } from "..";

const Confirmation = () => {
    const location = useLocation();     
    const navigate = useNavigate();

    const axios = useContext(AxiosContext);
    const user = useContext(UserContext);

    useEffect( () => {
        clearCart();
    }, [])

    const clearCart = async () => {
        localStorage.removeItem('guestCartItems');
        
        if(user){
            try {
                const userIdResponse = await axios.get(`/utilisateur/find/${user.courriel}`);
                const response = await axios.put(`/panier/clear/${userIdResponse.data._id}`);
            } catch (error) {
                console.error('Error clearing cart:', error);
            }
        }
      };

    const messageConfirmation = "Votre commande a été complété avec succès!";

    return(
        <ModelePage>
            <Container className="text-center">
                <Stack gap={4} style={{border: 'solid lightGray 1px'}}>
                    <div >
                        <h3 style={ {color:"green"}}>{messageConfirmation}</h3>
                        <p style={{fontWeight:"bold"}}>Cout total de la commande: {location.state.total} CAD</p>
                        <p style={{fontWeight:"bold"}}>Numéro de confirmation de la commande: {location.state.orderID}</p>
                    </div>
                    <div>
                        <h3  style={ {color:"blue", cursor: "pointer",textDecorationLine: 'underline'}} onClick={() => navigate("/")}>Retourner Magasiner</h3>
                    </div>
                </Stack>
            </Container>
        </ModelePage>
    )
}

export default Confirmation;