import { useState } from "react";
import Form from "react-bootstrap/Form";

export const SearchBar = ({ setResults }) => {
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
            Produits.nomProduit.toLowerCase().includes(value.toLowerCase())
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
    <Form>
      <Form.Control
        type="search"
        placeholder="Recherche"
        className="me-2"
        aria-label="Search"
        style={{ height: "10%", alignSelf: "center", margin: "10px" }}
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </Form>
  );
};
