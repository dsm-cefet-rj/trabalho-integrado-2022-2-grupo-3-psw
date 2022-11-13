import Carousel from 'react-bootstrap/Carousel';
import img1 from "../../img/product-image-1668102033.jpg";
import img2 from "../../img/travesseiro-ortopedico-durma-bem-984312.jpg";
import img3 from "../../img/travesseiro-orto.jpg";

function NoTransitionExample() {
  return (
    <Carousel slide={false} className="">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default NoTransitionExample;