import Button from "react-bootstrap/Button";

function Bouton({ variant, nom }) {
  return (
    <>
      <Button type="submit" variant={variant}>
        {nom}
      </Button>{" "}
    </>
  );
}

export default Bouton;
