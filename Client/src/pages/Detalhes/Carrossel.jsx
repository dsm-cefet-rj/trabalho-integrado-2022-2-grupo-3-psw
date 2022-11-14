import { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./CarroselIndicators.css"

function NoTransitionExample(props) {

  const fotos = { ...props.produto };
  const fotosA = Object.values(fotos);
  useEffect(() => {
    const indicators = document.querySelectorAll(".carousel-indicators button");
    for (let i = 0; i < fotosA.length; i++) {
        indicators[i].setAttribute("style", `background-image: url('./src/img${fotosA[i]}')`);
    }
  }, [])


  return (
    <Carousel slide={false} className="">
      {Object.keys(fotos).map((item) => {
        return (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`src/img${fotos[item]}`}
              alt="First slide"
            />
          </Carousel.Item>
        )
      })}
    </Carousel>
  );
}

export default NoTransitionExample;