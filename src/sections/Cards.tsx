import Card from "../components/Card";
import styled from "styled-components";

const Styles = styled.div`
  height: auto;
  padding-top: 4rem;
  padding-bottom: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  align-items: stretch;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Cards = () => {
  return (
    <Styles className="container">
      <Card
        head={"/img/card-play-harder.png"}
        body="Aenean mollis dolor a mattis viverra. In hac habitasse platea
        dictumst. Curabitur tempus dui tortor, et bibendum lacus eleifend ut."
      />
      <Card
        head={"/img/card-simplicity.png"}
        body="Donec vitae augue tellus. Proin et urna sit amet metus fermentum dapibus non quis urna."
      />
      <Card
        head={"/img/card-innovation.png"}
        body="Suspendisse vehicula, lectus sed molestie aliquam, arcu neque gravida lacus."
      />
    </Styles>
  );
};

export default Cards;
