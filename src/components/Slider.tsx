import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import styled from "styled-components";

const Styles = styled.div`
  position: relative;
  .text {
    color: white;
    position: absolute;
    z-index: 10000;
    top: 30%;
    left: 10%;
    max-width: 18%;
  }
  .text_title {
    font-size: 3em;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .text_body {
    font-size: 0.85em;
    font-weight: medium;
  }
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    .text {
      backdrop-filter: blur(10px);
      background-color: #0000007b;
      border-radius: 16px;
      top: 50%; /* 3 */
      left: 50%; /* 3 */
      transform: translate(-50%, -50%);
      max-width: 100%;
      padding: 2rem;
    }
    .text_title {
      font-size: 1.5em;
    }
    .text_body {
      font-size: 0.8em;
    }
  }
`;

const Slider = () => {
  return (
    <Styles>
      <div className="text">
        <h2 className="text_title">lorem ipsum.</h2>
        <p className="text_body">
          Consectetur adipiscing elit. Nulla condimentum tortor sem, in semper
          nisl bibendum eu.
        </p>
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
