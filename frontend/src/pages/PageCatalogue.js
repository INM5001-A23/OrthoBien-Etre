import ModelePage from "../layout/ModelePage";
import Filter from "../components/Filter";
import SortBy from "../components/SortBy";
import CarteCarree from "../components/CarteCarree";

function PageCatalogue() {
  return (
    <ModelePage>
      <Filter />
      <SortBy />
      <CarteCarree />
    </ModelePage>
  );
}
export default PageCatalogue;
