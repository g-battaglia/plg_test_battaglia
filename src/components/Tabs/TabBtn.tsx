import { useState } from "react";
import styled from "styled-components";

const Styles = styled.li`
  display: flex;
  .title {
    min-width: fit-content;
    width: 35%;
    text-transform: none;
    background-color: gray;
  }
  .content {
    padding: 2rem;
    background-color: white;
    position: absolute;
    top: 0;
    left: 35%;
    font-weight: 300;
    width: 65%;
    height: 100%;
  }
  .hide {
    height: 0;
    overflow: hidden;
    padding: 0;
    p {
      display: none;
    }
  }

  .active {
    background-color: black;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: fit-content;
    .title {
      width: 100%;
    }
    .content {
      position: static;
      width: 100%;
      height: 300px;
    }
    .hide {
      display: none;
    }
  }
`;

type Props = {
  title?: string;
  content?: string;
  active: boolean;
  setActive: Function;
  closeAll: () => void;
};
const TabBtn = ({ title, content, active, setActive, closeAll }: Props) => {
  function clickHandler() {
    closeAll();
    setActive(true);
  }

  return (
    <Styles className="tab__item">
      <h3
        className={"title btn btn-dark" + (active ? " active" : "")}
        onClick={clickHandler}
      >
        Vestibulum at odio sit amet
      </h3>
      <div className={active ? "content" : "content hide"}>
        <p>{content ? content : "Aasdasdasd"}</p>
      </div>
    </Styles>
  );
};

export default TabBtn;
