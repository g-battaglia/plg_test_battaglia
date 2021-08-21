import styled from "styled-components";
import BannerText from "./BannerText";

const p = process.env.PUBLIC_URL;

const Styles = styled.div`
  .flex {
    display: flex;
    height: 75vh;
    width: 100%;
  }

  .figure {
    overflow: hidden;
    background-image: url(${p}/img/banner-we-are.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 58%;
    height: 100%;
  }
  .text {
    width: 42%;
    background-color: black;
  }
  .reverse {
    flex-direction: row-reverse;
  }
  @media (max-width: 768px) {
    .flex {
      flex-direction: column;
      height: 100%;
    }
    .figure {
      height: 65vh;
      width: 100%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .text {
      width: 100%;
    }
  }
`;

type Props = {
  reverse?: boolean;
  id?: string;
};

const Banner = ({ reverse, id }: Props) => {
  return (
    <Styles id={id}>
      <div className={reverse ? "flex reverse" : "flex"}>
        <div className="figure"></div>
        <BannerText className="text" reverse={reverse} />
      </div>
    </Styles>
  );
};

export default Banner;
