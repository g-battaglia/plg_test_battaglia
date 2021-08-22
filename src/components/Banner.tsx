import styled from "styled-components";
import BannerText from "./BannerText";

const Styles = styled.div`
  .flex {
    display: flex;
    height: 75vh;
    width: 100%;
  }

  .figure {
    overflow: hidden;
    background-color: black;
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
      height: 35vh;
      width: 100%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .text {
      width: 100%;
      height: 65vh;
    }
  }
`;

type Props = {
  title: string;
  buttonText: string;
  image?: string;
  reverse?: boolean;
  id?: string;
};

const Banner = ({ reverse, id, image, title, buttonText }: Props) => {
  return (
    <Styles id={id}>
      <div className={reverse ? "flex reverse" : "flex"}>
        <div
          className="figure"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + image})`,
          }}
        ></div>
        <BannerText
          className="text"
          reverse={reverse}
          title={title}
          buttonText={buttonText}
        />
      </div>
    </Styles>
  );
};

export default Banner;
