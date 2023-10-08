import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function SortBy() {
  return (
    <DropdownButton id="filter" title="filter">
      <Dropdown.Item href="#/action-1">Prix ascendant</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Prix descendant</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Les mieux notés</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Produits en promotion</Dropdown.Item>
    </DropdownButton>
  );
}

export default SortBy;
