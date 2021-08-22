import styled from "styled-components";

const Styles = styled.h3`
  text-align: center;
  min-width: fit-content;
  width: 35%;
  text-transform: none;
  background-color: #cccccc;
  color: black;
  font-weight: 400;
  border-bottom: 1px solid rgb(235, 235, 235);
  &:hover {
    color: white;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem;
  }
`;

type Props = {
  title: string;
  active: boolean;
  clickHandler: any;
};

const TabTitle = ({ title, active, clickHandler }: Props) => {
  return (
    <Styles
      className={"title btn btn-dark" + (active ? " active" : "")}
      onClick={clickHandler}
    >
      {title}
    </Styles>
  );
};

export default TabTitle;
