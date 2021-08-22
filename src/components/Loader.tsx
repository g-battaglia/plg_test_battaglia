import styled from "styled-components";

const Styles = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  img {
    height: 50px;

    animation: spin 4s linear infinite;
  }
  @keyframes spin {
    100% {
      transform: rotate(3600deg);
    }
  }
`;
const Loader = () => {
  return (
    <Styles>
      <img src={process.env.PUBLIC_URL + "/img/loader.png"} alt="Loading..." />
    </Styles>
  );
};

export default Loader;
