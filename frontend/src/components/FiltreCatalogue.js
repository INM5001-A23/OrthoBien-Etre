import { DropdownButton, Form } from "react-bootstrap";

function FiltreCatalogue({ filtre, setFiltre }) {
  const getNomFiltre = () => {
    const noms = {
      grandprix: ": Prix[Bas-Élevé]",
      petitprix: ": Prix[Élevé-Bas]",
      promotion: ": En promotion",
      "": "",
    };

    console.log(filtre);

    return noms[filtre];
  };

  const onFormulaireTrierChange = (e) => {
    const radioValue = e.target.value;

    const chemins = {
      "trie-eleve-bas": "grandprix",
      "trie-bas-eleve": "petitprix",
      // TODO
      "trie-meilleurs-vendeurs": "",
      "trie-promotion": "promotion",
    };

    setFiltre(chemins[radioValue]);
  };

  return (
    <DropdownButton
      id="dropdown-basic-button"
      title={`Trier par${getNomFiltre()}`}
      style={{ margin: "0px 0px 15px 0px" }}
      autoClose="outside"
    >
      <Form onChange={onFormulaireTrierChange}>
        <a className="dropdown-item">
          <Form.Check>
            <Form.Check.Input
              type="radio"
              id="trie-bas-eleve"
              name="formulaire-trier"
              value="trie-bas-eleve"
            />
            <Form.Check.Label
              htmlFor="trie-bas-eleve"
              style={{ width: "100%" }}
            >
              Prix[Bas-Élevé]
            </Form.Check.Label>
          </Form.Check>
        </a>
        <a className="dropdown-item">
          <Form.Check>
            <Form.Check.Input
              type="radio"
              id="trie-eleve-bas"
              name="formulaire-trier"
              value="trie-eleve-bas"
            />
            <Form.Check.Label
              htmlFor="trie-eleve-bas"
              style={{ width: "100%" }}
            >
              Prix[Élevé-Bas]
            </Form.Check.Label>
          </Form.Check>
        </a>
        <a className="dropdown-item">
          <Form.Check>
            <Form.Check.Input
              type="radio"
              id="trie-meilleurs-vendeurs"
              name="formulaire-trier"
              value="trie-meilleurs-vendeurs"
            />
            <Form.Check.Label
              htmlFor="trie-meilleurs-vendeurs"
              style={{ width: "100%" }}
            >
              Meilleurs vendeurs
            </Form.Check.Label>
          </Form.Check>
        </a>
        <a className="dropdown-item">
          <Form.Check>
            <Form.Check.Input
              type="radio"
              id="trie-promotion"
              name="formulaire-trier"
              value="trie-promotion"
            />
            <Form.Check.Label
              htmlFor="trie-promotion"
              style={{ width: "100%" }}
            >
              En promotion
            </Form.Check.Label>
          </Form.Check>
        </a>
      </Form>
    </DropdownButton>
  );
}

export default FiltreCatalogue;
