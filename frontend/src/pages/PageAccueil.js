import { Stack } from "react-bootstrap";
import ExampleCarouselImage from "../components/ExampleCarouselImage";
import ModelePage from "../layout/ModelePage";
import Carousel from "react-bootstrap/Carousel";
import CarteCercle from "../components/CarteCercle";
import "./PageAccueil.css";
import Footer from "../layout/Footer.js";

function PageAccueil() {
  return (
    <ModelePage>
      <Stack gap={3}>
        <Carousel>
          <Carousel.Item>
            <ExampleCarouselImage text="First slide" />
            <Carousel.Caption>
              <h3>Produits vedettes</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage text="Second slide" />
            <Carousel.Caption>
              <h3>Meilleurs vendeurs</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage text="Third slide" />
            <Carousel.Caption>
              <h3>En Promotion</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <h1 className="jumbotron-heading">Les Catégories</h1>
        <CarteCercle />
        <CarteCercle />
        <Footer />
      </Stack>
    </ModelePage>
  );
}

export default PageAccueil;
