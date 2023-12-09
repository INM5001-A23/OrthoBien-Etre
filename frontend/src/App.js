import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageAccueil from "./pages/PageAccueil";
import Erreur from "./pages/PageErreur";
import PageCatalogue from "./pages/PageCatalogue";
import PageConnexion from "./pages/PageConnexion";
import PageInscription from "./pages/PageInscription";
import PagePanier from "./pages/PagePanier";
import PageCommande from "./pages/PageCommande";
import PageProduit from "./pages/PageProduit";
import PageAdmin from "./pages/PageAdmin";
import PageCompte from "./pages/PageCompte";
import PageLivraison from "./pages/PageLivraison";
import PageConfirmation from "./pages/PageConfirmation";
import PageFAQ from "./pages/PageFAQ";
import PageContact from "./pages/PageContact";
import PageRecherche from "./pages/PageRecherche";

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
    element: <PagePanier />,
    errorElement: <Erreur />,
  },

  {
    path: "/commande",
    element: <PageCommande />,
    errorElement: <Erreur />,
  },

  {
    path: "/livraison",
    element: <PageLivraison />,
    errorElement: <Erreur />,
  },

  {
    path: "/confirmation",
    element: <PageConfirmation />,
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
  {
    path: "/compte",
    element: <PageCompte />,
    errorElement: <Erreur />,
  },
  {
    path: "/faq",
    element: <PageFAQ />,
    errorElement: <Erreur />,
  },
  {
    path: "/contacts",
    element: <PageContact />,
    errorElement: <Erreur />,
  },
  {
    path: "/Recherche",
    element: <PageRecherche />,
    errorElement: <Erreur />,
  },
]);



function App() {
  return <RouterProvider router={router} />;
}

export default App;
