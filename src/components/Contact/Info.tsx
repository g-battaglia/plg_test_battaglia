import styled from "styled-components";

const Styles = styled.div`
  max-width: 50%;

  h2 {
    font-size: 4em;
    margin-bottom: 2rem;
  }
  p {
    font-weight: 300;
    line-height: 1.5;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    margin-right: 2rem;
  }
  @media (max-width: 576px) {
    margin-right: 0;
    margin-bottom: 4rem;
    text-align: center;
  }
`;

const Info = () => {
  return (
    <Styles>
      <h2>contact us</h2>
      <p>Playground srl </p>
      <p>Via G. Mazzini 3/C, </p>
      <p>Cernusco Sul Naviglio (Milano)</p>
      <p>-</p>
      <p>T +39 0240706003</p>
    </Styles>
  );
};

export default Info;
