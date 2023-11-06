import Carousel from "react-bootstrap/Carousel";

function Carrousel({
  images,
  itemHeight = "350px",
  style = {},
  className = "",
}) {
  return (
    <Carousel style={style} variant="dark" className={className}>
      {images.map((image) => (
        <Carousel.Item style={{ height: itemHeight }}>
          <img
            className="d-block w-100 h-100 object-fit-cover"
            src={image}
            alt="First slide"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carrousel;
