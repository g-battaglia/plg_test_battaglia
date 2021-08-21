import { Info, Form } from "../components/Contact";
import styled from "styled-components";

const Styles = styled.div`
  background-color: black;
  color: white;
  padding: 6rem 0;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }
  @media (max-width: 576px) {
    .container {
      grid-template-columns: 1fr;
    }
  }
`;

const Contact = () => {
  return (
    <Styles>
      <div className="container">
        <Info />
        <Form />
      </div>
    </Styles>
  );
};

export default Contact;
