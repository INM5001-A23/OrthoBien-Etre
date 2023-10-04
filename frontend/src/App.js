import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageAccueil from "./pages/PageAccueil";
import PageErreur from "./pages/PageErreur";
import PageCatalogue from "./pages/PageCatalogue";
import PageConnexion from "./pages/PageConnexion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageAccueil />,
    errorElement: <PageErreur />,
  },
  {
    path: "/catalogue",
    element: <PageCatalogue />,
    errorElement: <PageErreur />,
  },
  {
    path: "/connexion",
    element: <PageConnexion />,
    errorElement: <PageErreur />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
