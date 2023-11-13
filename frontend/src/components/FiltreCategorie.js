import { useContext, useEffect, useState } from "react";
import { DropdownButton, Form } from "react-bootstrap";
import { AxiosContext } from "..";

function FiltreCategorie({ filtre, setFiltre }) {
  const axios = useContext(AxiosContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("/categories")
      .then(function (response) {
        // handle success
        console.log(response);
        setCategories(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [axios]);

  const onFormulaireFiltreChange = (e) => {
    setFiltre(e.target.value);
  };

  const getNomFiltre = () => {
    if (!filtre) {
      return "";
    }

    const nomCategorie = categories.find(
      (categorie) => categorie.codeCategorie == filtre
    )?.nomCategorie;

    return `: ${nomCategorie}`;
  };

  return (
    <DropdownButton
      variant="secondary"
      id="dropdown-basic-button"
      title={`Filtrer par catégorie${getNomFiltre()}`}
      style={{ margin: "0px 0px 15px 0px" }}
      autoClose="outside"
    >
      <Form onChange={onFormulaireFiltreChange}>
        {categories.map((categorie) => (
          <a className="dropdown-item">
            <Form.Check>
              <Form.Check.Input
                type="radio"
                id={`categorie-${categorie.codeCategorie}`}
                name="formulaire-categorie-trier"
                value={categorie.codeCategorie}
              />
              <Form.Check.Label
                htmlFor={`categorie-${categorie.codeCategorie}`}
                style={{ width: "100%" }}
              >
                {categorie.nomCategorie}
              </Form.Check.Label>
            </Form.Check>
          </a>
        ))}
      </Form>
    </DropdownButton>
  );
}

export default FiltreCategorie;
