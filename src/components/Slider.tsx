import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import styled from "styled-components";

const Styles = styled.div`
  position: relative;
  .text {
    color: white;
    position: absolute;
    z-index: 10000;
    top: 20%;
    left: 20%;
  }
`;

const Slider = () => {
  return (
    <Styles>
      <div className="text">
        <h2>Hello</h2>
      </div>
      <Carousel showThumbs={false} showStatus={false}>
        <div>
          <img src={process.env.PUBLIC_URL + "/img/slide-hello.jpg"} alt="" />
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + "/img/slide-circle.jpg"} alt="" />
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + "/img/slide-play.jpg"} alt="" />
        </div>
      </Carousel>
    </Styles>
  );
};

export default Slider;
