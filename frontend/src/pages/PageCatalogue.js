import ModelePage from "../layout/ModelePage";
import CarteCarree from "../components/CarteCarree";
import BoutonDeroulant from "../components/BoutonDeroulant";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./PageCatalogue.module.css";

function PageCatalogue() {
  return (
    <ModelePage>
      <BoutonDeroulant
        titre="Trier par"
        option1="Prix[Bas-Élevé]"
        option2="Prix[Élevé-Bas]"
        option3="Meilleurs vendeurs"
        option4="En promotion"
      />
      <Row xs={4} md={4} className="g-3">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <CarteCarree
              img="/bones.svg"
              nomProduit="Nom du produit"
              categorie="Catégorie"
              description="Description"
              prix="Prix(0.00 $)"
            />
          </Col>
        ))}
      </Row>
    </ModelePage>
  );
}
export default PageCatalogue;
