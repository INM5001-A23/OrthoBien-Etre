import ModelePage from "../layout/ModelePage";
import CarteProduit from "../components/CarteProduit";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useContext, useEffect, useState } from "react";
import { AxiosContext } from "..";
import { Button, Container, Stack } from "react-bootstrap";
import FiltreCatalogue from "../components/FiltreCatalogue";
import { useSearchParams } from "react-router-dom";
import FiltreCategorie from "../components/FiltreCategorie";
//import PropTypes from 'prop-types';
import {SearchBar } from "../components/searchbar"
import { SearchResultsList} from "../components/SearchResultsList"


function Recherche  ({ }){
  const [results, setResults] = useState([]);
  const axios = useContext(AxiosContext);
  const [searchParams] = useSearchParams();
  const [filtreCategorie, setFiltreCategorie] = useState(
    searchParams.get("filtreCategorie") || ""
  );
  
  const [filtre, setFiltre] = useState("");

  useEffect(() => {
    <SearchBar results={setResults} />;
    <SearchResultsList setResults={results} />;
   // console.log(results)

    if (results && results.length > 0) {
      // Search results are already provided, no need to fetch
      return;
    }
  
    // Fetch data using the current filter and category
    const fetchData = async () => {
      try {
        // Update the API endpoint based on your server setup
        const response = await fetch(`/api/search?filtre=${filtre}&categorie=${filtreCategorie}`);
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
    
    //fetchData(); // Call the fetchData function

}, [axios, filtre, filtreCategorie, results]);


  return (
    <ModelePage>
      <Container>
        <Stack direction="horizontal" gap={2}>
          <FiltreCatalogue filtre={filtre} setFiltre={setFiltre} />
          <FiltreCategorie
            filtre={filtreCategorie}
            setFiltre={setFiltreCategorie}
          />
          <Button
            style={{ margin: "0px 0px 15px 0px" }}
            onClick={() => {
              setFiltre(""); // Réinitialise le filtre principal
              setFiltreCategorie(""); // Réinitialise le filtre de catégorie
            }}
          >
            Réinitialiser
          </Button>
        </Stack>
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

// Recherche.propTypes = {
//   results: PropTypes.array.isRequired,
//   setResults: PropTypes.func.isRequired,
// };

export default Recherche;
