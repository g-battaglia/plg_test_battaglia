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

  @media (max-width: 768px) {
    .nav {
      flex-direction: column;
      justify-content: center;

      height: 100vh;
      position: absolute;
      top: 0;
      right: 0;
      background-color: #000;
      align-items: center;
      width: 100%;
      transition: right 0.25s ease-in-out;
    }

    .nav__item {
      padding: 2rem;
      :last-child {
        padding-right: 2rem;
      }
    }

    .hide {
      right: -100%;
    }
  }
`;

type Props = {
  menuOpen: boolean;
  setMenuOpen: Function;
};
const NavbarNav = ({ menuOpen, setMenuOpen }: Props) => {
  function clickHandler() {
    setMenuOpen(false);
  }
  return (
    <Styles className="navbar-nav">
      <ul className={menuOpen ? "nav" : "hide nav"} onClick={clickHandler}>
        <li className="nav__item">
          <a href="#weare">we are</a>
        </li>
        <li className="nav__item" onClick={clickHandler}>
          <a href="#wedo">we are</a>
        </li>
        <li className="nav__item" onClick={clickHandler}>
          <a href="#careers">careers</a>
        </li>
        <li className="nav__item" onClick={clickHandler}>
          <a href="#contactus">contact us</a>
        </li>
      </ul>
    </Styles>
  );
};

export default NavbarNav;
