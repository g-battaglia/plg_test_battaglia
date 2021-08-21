import styled from "styled-components";

const StyledFooter = styled.footer`
  border-top: 1px solid #4d4d4d;
  background-color: black;
  height: 25vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  color: white;
  img {
    width: 100px;
    height: auto;
    margin-bottom: 2rem;
  }

  .links {
    display: flex;
    margin-left: -4rem;
    li {
      margin-left: 4rem;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <img src={process.env.PUBLIC_URL + "/img/footlogo.png"} alt="" />
      <ul className="links">
        <li>we do</li>
        <li>we do</li>
        <li>we do</li>
        <li>we do</li>
      </ul>
    </StyledFooter>
  );
};

export default Footer;
