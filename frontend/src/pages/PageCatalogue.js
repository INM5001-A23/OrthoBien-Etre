import ModelePage from "../layout/ModelePage";
import Filtres from "../components/Filtres";
import CarteCarree from "../components/CarteCarree";

function PageCatalogue() {
  return (
    <ModelePage>
      <Filtres />
      <CarteCarree />
    </ModelePage>
  );
}
export default PageCatalogue;
