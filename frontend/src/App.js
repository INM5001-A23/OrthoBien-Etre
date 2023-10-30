import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageAccueil from "./pages/PageAccueil";
import PageErreur from "./pages/PageErreur";
import PageCatalogue from "./pages/PageCatalogue";
import PageConnexion from "./pages/PageConnexion";
import PageInscription from "./pages/PageInscription";
import PagePanier from "./pages/PagePanier";
import PagePaiement from "./pages/PagePaiement";
import PageProduit from "./pages/PageProduit";

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

  {
    path: "/inscription",
    element: <PageInscription />,
    errorElement: <PageErreur />,
  },

  {
    path: "/panier",
    element: <PagePanier />,
    errorElement: <PageErreur />,
  },

  {
    path: "/paiement",
    element: <PagePaiement />,
    errorElement: <PageErreur />,
  },

  {
    path: "/produit/:codeProduit",
    element: <PageProduit />,
    errorElement: <PageErreur />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
