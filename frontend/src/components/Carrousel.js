import Carousel from "react-bootstrap/Carousel";

function Carrousel({
  images,
  itemHeight = "650px",
  style = {},
  className = "",
}) {
  const convertToDataUrl = (image) => {
    if (!image) {
      return "";
    }

    return `data:${image.mimeType};base64,${image.image}`;
  };

  return (
    <Carousel style={style} variant="dark" className={className}>
      {images.map((image) => (
        <Carousel.Item style={{ height: itemHeight }}>
          <img
            className="d-block w-100 h-100 object-fit-cover"
            src={convertToDataUrl(image)}
            alt="First slide"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carrousel;
