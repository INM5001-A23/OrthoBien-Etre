import Button from "react-bootstrap/Button";
import "../components/SearchResultsList.css";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import SearchResultPortal from "../components/SearchResultPortal";
import { useLocation } from "react-router-dom";
import { convertToDataUrl } from "../utils";

export const SearchResultsList = ({ results }) => {
const navigate = useNavigate();
const firstFourResults = results.slice(0, 4);

  return (
    <SearchResultPortal>
    <Form  style={{ position: "absolute"}} >
    <div className="results-list">
      {firstFourResults.map((result, id) => {
       
        return(
         

          <div 
          onClick={() => navigate(`/produit/${result.codeProduit}`)}
          key={id} 
          className="result-item"  
          
          >
           <input 
            type="image"  
              style={{ width: "150px", height: "100px" , display: "inline-block"}}
              src={convertToDataUrl(result.images[0])} 
              alt={`Image for ${result.nomProduit}`}
            />
            <p>
            {result.nomProduit}
            </p> 
          </div>

        )
        
      })}

      <Button
          onClick={() => navigate(`/recherche` ,{
            state: { total:results },
          })
        }
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

 