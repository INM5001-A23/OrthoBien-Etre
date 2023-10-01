import Stack from "react-bootstrap/Stack";
import Navigation from "./Navigation";

function ModelePage({ children }) {
  return (
    <Stack gap={3}>
      <Navigation />
      <div className="p-2">{children}</div>
    </Stack>
  );
}

export default ModelePage;
