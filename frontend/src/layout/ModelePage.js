import Stack from "react-bootstrap/Stack";
import Navigation from "./Navigation";
import Footer from "./Footer";

function ModelePage({ children }) {
  return (
    <Stack gap={3}>
      <Navigation />
      <div className="p-2">{children}</div>
      <Footer />
    </Stack>
  );
}

export default ModelePage;
