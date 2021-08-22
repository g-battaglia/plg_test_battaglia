import styled from "styled-components";
import { NavbarNav, Logo, ToggleMenu } from "../components/Navbar";
import { useState } from "react";
import { useWindowScroll } from "react-use";

const Header = styled.header`
  background: rgba(0, 0, 0, 0);

  color: white;
  position: fixed;
  width: 100%;
  padding: 0.5rem 0;
  z-index: 100000;
  transition: background-color 0.5s ease-in-out;

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 768px) {
  }
`;

const scrollStyle = {
  backgroundColor: "#000000c0",
  backdropFilter: "blur(10px)",
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { y } = useWindowScroll();

  return (
    <Header style={y ? scrollStyle : {}}>
      <nav className="navbar container">
        <Logo />
        <NavbarNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <ToggleMenu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      </nav>
    </Header>
  );
};

export default Navbar;
