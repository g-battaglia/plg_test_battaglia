import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavbarNav, Logo } from "./NavbarComponents";
import { useState } from "react";

const Header = styled.header`
  background: #00000073;
  color: white;
  position: fixed;
  width: 100%;
  padding: 0.5rem;
  z-index: 100000;
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .menu {
      display: none;
    }
    @media (max-width: 768px) {
      .menu {
        color: inherit;
        font-size: 1.5rem;
        border: none;
        background: inherit;
        display: block;
        position: relative;
        z-index: 1000;
        cursor: pointer;
      }
    }
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Header>
      <nav className="navbar container">
        <Logo />
        <NavbarNav menuOpen={menuOpen} />
        <button className="menu" onClick={() => setMenuOpen((prev) => !prev)}>
          {menuOpen ? (
            <FontAwesomeIcon icon="times" className="times" />
          ) : (
            <FontAwesomeIcon icon="bars" className="bars" />
          )}
        </button>
      </nav>
    </Header>
  );
};

export default Navbar;
