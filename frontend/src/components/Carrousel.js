import Carousel from "react-bootstrap/Carousel";

function Carrousel({ images }) {
  return (
    <Carousel data-bs-theme="dark">
      {images.map((image) => (
        <Carousel.Item style={{ height: "350px" }}>
          <img
            className="d-block w-100 h-100 object-fit-cover"
            src={image}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carrousel;
