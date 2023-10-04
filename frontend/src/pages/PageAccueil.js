import { Stack } from "react-bootstrap";
import ExampleCarouselImage from "../components/ExampleCarouselImage";
import ModelePage from "../layout/ModelePage";
import Carousel from "react-bootstrap/Carousel";
import CarteCercle from "../components/CarteCercle";
import "./PageAccueil.css";

function PageAccueil() {
  return (
    <ModelePage>
      <Stack gap={3}>
        <Carousel>
          <Carousel.Item>
            <ExampleCarouselImage text="First slide" />
            <Carousel.Caption>
              <h3>1er produit vedette</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage text="Second slide" />
            <Carousel.Caption>
              <h3>2e produit vedette</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage text="Third slide" />
            <Carousel.Caption>
              <h3>3e produit vedette</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <h1 className="jumbotron-heading">Les Produits Populaires</h1>
        <CarteCercle />
        <h1 className="jumbotron-heading">Les Catégories</h1>
        <CarteCercle />
        <CarteCercle />
        <h1 className="jumbotron-heading">Les Promotions</h1>
        <CarteCercle />
      </Stack>
    </ModelePage>
  );
}

export default PageAccueil;
