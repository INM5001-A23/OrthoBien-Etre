import "../components/SearchResultsList.css";

import { useNavigate } from "react-router-dom";


export const SearchResultsList = ({ results, result }) => {
const navigate = useNavigate();
const firstFourResults = results.slice(0, 4);

  return (
    <div className="results-list">
      {firstFourResults.map((result, id) => {
       
        return(

          <div onClick={() => navigate(`/produit/${result.codeProduit}`)}
          key={id} className="result-item"  style={{ width: "80px" }}
          
          >

           <img 
                style={{ width: "100px" , position: "relative", display: "inline-block"}}
                src={`/images/produits/${result.codeProduit}.jpeg`} 
                alt={`Image for ${result.nomProduit}`}
            />
                {result.nomProduit}
              
          </div>

        )
        
      })}
    </div>
  );
};

 