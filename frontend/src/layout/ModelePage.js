import Stack from "react-bootstrap/Stack";
import Navigation from "./Navigation";
import Footer from "./Footer";

function ModelePage({ children }) {
  return (
    <Stack gap={3} className="min-vh-100">
      <Navigation />
      <div className="flex-grow-1">{children}</div>
      <Footer />
    </Stack>
  );
}

export default ModelePage;
