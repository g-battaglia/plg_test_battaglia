import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";

const StyledButton = styled.button`
  display: none;

  .rotate {
    animation: rotate 0.25s ease-out;
    animation-iteration-count: 1;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(180deg);
    }
  }
  @media (max-width: 768px) {
    color: inherit;
    font-size: 1.5rem;
    border: none;
    background: inherit;
    display: block;
    position: relative;
    z-index: 1000;
    cursor: pointer;
    .hide {
      display: none;
    }
  }
`;

type Props = {
  setMenuOpen: Function;
  menuOpen: boolean;
};

const ToggleMenu = ({ menuOpen, setMenuOpen }: Props) => {
  return (
    <StyledButton
      className="menu"
      onClick={() => setMenuOpen((prev: boolean) => !prev)}
    >
      <FontAwesomeIcon
        icon="times"
        className={`bars rotate + ${menuOpen ? "" : "hide"}`}
      />
      <FontAwesomeIcon
        icon="bars"
        className={`bars rotate + ${menuOpen ? "hide" : ""}`}
      />
    </StyledButton>
  );
};

export default ToggleMenu;
