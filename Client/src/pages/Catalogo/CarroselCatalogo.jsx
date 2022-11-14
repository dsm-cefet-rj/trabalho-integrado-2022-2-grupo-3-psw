import Carousel from 'react-bootstrap/Carousel';
import ImagemCarrosel1 from "../../img/beautiful-luxury-hotel-bedroom.jpg";
import ImagemCarrosel2 from "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg";
import ImagemCarrosel3 from "../../img/folded-towels-on-the-bed.jpg";


function CarroselCatalogo() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={ImagemCarrosel1}
          alt="First slide"
        />       
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={ImagemCarrosel2}
          alt="Second slide"
        />        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ImagemCarrosel3}
          alt="Third slide"
        />      
      </Carousel.Item>
    </Carousel>
  );
}

export default CarroselCatalogo;