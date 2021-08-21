import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  position: relative;
  z-index: 10000;
`;

const Logo = () => {
  return (
    <StyledLogo className="brand">
      <a href="#top">
        <img
          src={process.env.PUBLIC_URL + "/img/logo-playground-white.png"}
          alt="Playground Logo"
        />
      </a>
    </StyledLogo>
  );
};

export default Logo;
