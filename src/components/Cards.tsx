import Card from "./Card";
import styled from "styled-components";

const Styles = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  justify-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Cards = () => {
  return (
    <Styles className="container">
      <Card />
      <Card />
      <Card />
    </Styles>
  );
};

export default Cards;
