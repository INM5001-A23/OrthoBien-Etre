import Button from "react-bootstrap/Button";
import "../components/SearchResultsList.css";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
//import Dropdown from "react-bootstrap/Dropdown";
//import DropdownButton from "react-bootstrap/DropdownButton";
import SearchResultPortal from "../components/SearchResultPortal";

export const SearchResultsList = ({ results }) => {
const navigate = useNavigate();
const firstFourResults = results.slice(0, 4);

// const handleSearchSubmit = (e) => {
//   e.preventDefault();
//   results(results);
// };

const handleRedirect = () => {
  
  navigate(`/Recherche`);
};
  return (
    <SearchResultPortal>
    <Form  style={{ position: "absolute"}} >
    <div className="results-list">
      {firstFourResults.map((result, id) => {
       
        return(
         

          <div 
          key={id} 
          className="result-item"  
          onClick={() => navigate(`/produit/${result.codeProduit}`)}
          
          >
           <input type="image" img 
              style={{ width: "100px" ,  display: "inline-block"}}
              src={`/images/produits/${result.codeProduit}.jpeg`} 
              alt={`Image for ${result.nomProduit}`}
            />
            {result.nomProduit}
              
          </div>

        )

        
        
      })}

      <Button
          onClick={handleRedirect}
          variant="outline-success"
          size="sm"
          style={{
            height: "10%",
            alignSelf: "center",
            margin: "0 5px 0 0",
            
          }}
      >
          Voir plus 
      </Button> 

    </div>
    </Form>
    </SearchResultPortal>
  );
};

 