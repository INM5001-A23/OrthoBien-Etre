import ModelePage from "../layout/ModelePage";
import CarteCarree from "../components/CarteCarree";
import BoutonDeroulant from "../components/BoutonDeroulant";

function PageCatalogue() {
  return (
    <ModelePage>
      <BoutonDeroulant
        img="/bones.svg"
        titre="Trier par"
        option1="Prix[Bas-Élevé]"
        option2="Prix[Élevé-Bas]"
        option3="Meilleurs vendeurs"
        option4="En promotion"
      />
      <CarteCarree
        nomProduit="Nom du produit"
        categorie="Catégorie"
        description="Description"
        prix="Prix(0.00 $)"
      />
    </ModelePage>
  );
}
export default PageCatalogue;
