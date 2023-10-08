import ModelePage from "../layout/ModelePage";
import CarteCarree from "../components/CarteCarree";
import BasicButtonExample from "../components/BasicButtonExample";

function PageCatalogue() {
  return (
    <ModelePage>
      <BasicButtonExample
        titre="Trier par"
        option1="Prix[Bas-Élevé]"
        option2="Prix[Élevé-Bas]"
        option3="Meilleurs vendeurs"
        option4="En promotion"
      />
      <CarteCarree />
    </ModelePage>
  );
}
export default PageCatalogue;
