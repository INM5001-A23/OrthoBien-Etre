import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Erreur from "./pages/Erreur";
import Catalogue from "./pages/Catalogue";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import Panier from "./pages/Panier";
import Paiement from "./pages/Paiement";
import Produit from "./pages/Produit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
    errorElement: <Erreur />,
  },
  {
    path: "/catalogue",
    element: <Catalogue />,
    errorElement: <Erreur />,
  },
  {
    path: "/connexion",
    element: <Connexion />,
    errorElement: <Erreur />,
  },

  {
    path: "/inscription",
    element: <Inscription />,
    errorElement: <Erreur />,
  },

  {
    path: "/panier",
    element: <Panier />,
    errorElement: <Erreur />,
  },

  {
    path: "/paiement",
    element: <Paiement />,
    errorElement: <Erreur />,
  },

  {
    path: "/produit/:codeProduit",
    element: <Produit />,
    errorElement: <Erreur />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
