import styled from "styled-components";

const Styles = styled.div`
  background-color: black;
  color: white;

  .inner {
    margin: 4rem;
    width: 35%;
    display: grid;
    gap: 2rem;
  }
  .title {
    font-size: 4rem;
  }
  @media (max-width: 768px) {
    .inner-reverse {
      margin-left: auto;
    }
  }
`;

const reversedStyles = { backgroundColor: "white", color: "black" };

type Props = {
  title: string;
  buttonText: string;
  className?: string;
  reverse?: boolean;
};
const BannerText = ({ className, reverse, title, buttonText }: Props) => {
  return (
    <Styles className={className} style={reverse ? reversedStyles : {}}>
      <div className={reverse ? "inner inner-reverse" : "inner"}>
        <h2 className="title">{title}</h2>
        <p className="description">
          Consectetur adipiscing elit. Nulla condimentum tortor sem.
        </p>
        <button
          className={reverse ? "btn btn-outline-dark" : "btn btn-outline-light"}
        >
          {buttonText}
        </button>
      </div>
    </Styles>
  );
};

export default BannerText;
