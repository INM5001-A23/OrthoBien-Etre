import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Filtres() {
  return (
    <DropdownButton id="filtres" title="Filtres">
      <Dropdown.Item href="#/action-1">Prix ascendant</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Prix descendant</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Les mieux notés</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Produits en promotion</Dropdown.Item>
    </DropdownButton>
  );
}

export default Filtres;
