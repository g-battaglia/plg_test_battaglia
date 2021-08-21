import styled from "styled-components";
import { NavbarNav, Logo, ToggleMenu } from "../components/Navbar";
import { useState } from "react";

const Header = styled.header`
  background: rgba(0, 0, 0, 0);
  color: white;
  position: fixed;
  width: 100%;
  padding: 0.5rem 0;
  z-index: 100000;

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 768px) {
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Header>
      <nav className="navbar container">
        <Logo />
        <NavbarNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <ToggleMenu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      </nav>
    </Header>
  );
};

export default Navbar;
