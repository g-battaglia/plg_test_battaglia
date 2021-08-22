import styled from "styled-components";

const Styles = styled.li`
  display: flex;
  .title {
    min-width: fit-content;
    width: 35%;
    text-transform: none;
    background-color: #cccccc;
    color: black;
    font-weight: 400;
    border-bottom: 1px solid rgb(235, 235, 235);
  }
  .content {
    padding: 3rem;
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
    color: white;
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
      min-height: 350px;
      height: fit-content;
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
