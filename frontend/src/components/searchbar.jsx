import Form from "react-bootstrap/Form";
import { useState } from "react";


export  const SearchBar  = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("http://localhost:3300/produits")
    
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((Produits) => {
          return (
            value &&
            Produits &&
            Produits.nomProduit &&
            Produits.nomProduit.toLowerCase().includes(value)
          );
        });
        setResults(results);
        
      });

      
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (

        <Form.Control
                   
            type="search"
            placeholder="Recherche"
            className="me-2"
            aria-label="Search"
            style={{ alignSelf: "center",}}
            value={input}
            onChange={(e) => handleChange(e.target.value)}
                      
        />

   
    
  );
};
