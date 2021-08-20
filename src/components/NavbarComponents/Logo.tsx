import styled from "styled-components";

const StyledLogo = styled.div``;

const Logo = () => {
  return (
    <StyledLogo className="brand">
      <img
        src={process.env.PUBLIC_URL + "/img/logo-playground-white.png"}
        alt="Playground Logo"
      />
    </StyledLogo>
  );
};

export default Logo;
