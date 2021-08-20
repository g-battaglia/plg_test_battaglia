import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  .nav {
    display: flex;
  }
  .nav__item {
    padding: 0 1rem;
    :last-child {
      padding-right: 0;
    }


    }
  }
  @media (max-width: 768px) {
      .nav {
        flex-direction: column;
        justify-content: center;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color:blue;
        width: 100%;

      }
      .nav__item {
        padding: 2rem;
        :last-child {
          padding-right: 2rem;
        }
      }

      .hide {
        display: none;
      }
    }
`;

type Props = {
  menuOpen: boolean;
};
const NavbarNav = ({ menuOpen }: Props) => {
  return (
    <Styles className="navbar-nav">
      <ul className={menuOpen ? "nav" : "hide nav"}>
        <li className="nav__item">
          <a href="#weare">we are</a>
        </li>
        <li className="nav__item">
          <a href="#wedo">we are</a>
        </li>
        <li className="nav__item">
          <a href="#careers">careers</a>
        </li>
        <li className="nav__item">
          <a href="#contactus">contact us</a>
        </li>
      </ul>
    </Styles>
  );
};

export default NavbarNav;
