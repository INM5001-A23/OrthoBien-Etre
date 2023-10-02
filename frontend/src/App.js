import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageAccueil from "./pages/PageAccueil";
import PageErreur from "./pages/PageErreur";
import PageCatalogue from "./pages/PageCatalogue";

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
