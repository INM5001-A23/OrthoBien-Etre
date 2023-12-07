import { Stack } from "react-bootstrap";
import ModelePage from "../layout/ModelePage";
import Onglets from "../components/Onglets";

function PageCompte() {
  return (
    <ModelePage>
      <Stack
        className="d-flex flex-column align-items-center justify-content-center"
        gap={4}
      >
        <h1 className="mb-2">Votre compte</h1>
        <Onglets />
      </Stack>
    </ModelePage>
  );
}

export default PageCompte;
