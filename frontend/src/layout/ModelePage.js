import Stack from "react-bootstrap/Stack";
import Navigation from "./Navigation";
import PiedDePage from "./PiedDePage";

function ModelePage({ children }) {
  return (
    <Stack gap={3} className="min-vh-100">
      <Navigation />
      <div className="flex-grow-1">{children}</div>
      <PiedDePage />
    </Stack>
  );
}

export default ModelePage;
