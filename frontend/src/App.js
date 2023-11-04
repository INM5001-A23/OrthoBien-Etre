import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accueil from "./pages/PageAccueil";
import Erreur from "./pages/PageErreur";
import Catalogue from "./pages/PageCatalogue";
import Connexion from "./pages/PageConnexion";
import Inscription from "./pages/PageInscription";
import Panier from "./pages/Panier";
import Paiement from "./pages/Paiement";
import Produit from "./pages/PageProduit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageAccueil />,
    errorElement: <Erreur />,
  },
  {
    path: "/catalogue",
    element: <PageCatalogue />,
    errorElement: <Erreur />,
  },
  {
    path: "/connexion",
    element: <PageConnexion />,
    errorElement: <Erreur />,
  },

  {
    path: "/inscription",
    element: <PageInscription />,
    errorElement: <Erreur />,
  },

  {
    path: "/panier",
    element: <Panier />,
    errorElement: <Erreur />,
  },

  {
    path: "/paiement",
    element: <PagePaiement />,
    errorElement: <Erreur />,
  },

  {
    path: "/produit/:codeProduit",
    element: <PageProduit />,
    errorElement: <Erreur />,
  },

  {
    path: "/admin",
    element: <PageAdmin />,
    errorElement: <Erreur />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
