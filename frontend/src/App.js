import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageAccueil from "./pages/PageAccueil";
import PageErreur from "./pages/PageErreur";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageAccueil />,
    errorElement: <PageErreur />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
