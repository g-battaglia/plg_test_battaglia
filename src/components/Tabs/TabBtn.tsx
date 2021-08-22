import styled from "styled-components";
import Loader from "../Loader";
import API from "../../API";
import { useState, useEffect } from "react";
import TabTitle from "./TabTitle";

const Styles = styled.li`
  display: flex;

  .content {
    padding: 4rem;
    background-color: white;
    position: absolute;
    top: 0;
    left: 35%;
    font-weight: 300;
    width: 65%;
    height: 100%;
    display: flex;
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
    color: white;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: fit-content;

    .content {
      position: relative;
      width: 100%;
      min-height: 350px;
      height: fit-content;
      padding: 2rem;
      left: 0;
    }
    .hide {
      display: none;
    }
  }
`;

type Props = {
  title: string;
  active: boolean;
  setActive: Function;
  closeAll: () => void;
  url: string;
};

const TabBtn = ({ title, active, setActive, closeAll, url }: Props) => {
  const [item, setItem] = useState(false as any);

  function clickHandler() {
    closeAll();
    setActive(true);
  }

  useEffect(() => {
    async function fetchApi() {
      setItem(false);
      const data = await API.getData(url);
      setTimeout(function () {
        setItem(data.item);
      }, 500);
    }
    fetchApi();
  }, [url, active]);

  return (
    <Styles className="tab__item">
      <TabTitle title={title} active={active} clickHandler={clickHandler} />
      <div className={active ? "content" : "content hide"}>
        <p>{item ? item.content : <Loader />}</p>
      </div>
    </Styles>
  );
};

export default TabBtn;
