import Carousel from "react-bootstrap/Carousel";
import { convertToDataUrl } from "../utils";

function Carrousel({
  images,
  itemHeight = "600px",
  style = {},
  className = "",
}) {
    const imagesCode = [1001,1002,1003];
    const imagesList = imagesCode.map((item) => {
      return `./images/${item}.png`
    });

  return (
    <Carousel style={style} variant="dark" className={className}>
      {imagesList.map((image) => (
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
