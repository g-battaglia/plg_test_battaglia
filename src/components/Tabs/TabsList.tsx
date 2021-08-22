import { useState } from "react";
import TabBtn from "./TabBtn";

import styled from "styled-components";

const StyledUl = styled.ul`
  height: 350px;
  position: relative;
  @media (max-width: 768px) {
    height: fit-content;
  }
`;

const TabsList = () => {
  const [firstTab, setFirstTab] = useState(true);
  const [secondTab, setSecondTab] = useState(false);
  const [thirdTab, setThirdTab] = useState(false);

  function closeAllTabs() {
    setFirstTab(false);
    setSecondTab(false);
    setThirdTab(false);
  }

  return (
    <StyledUl className="menu">
      <TabBtn
        title="Vestibulum at odio sit amet"
        active={firstTab}
        setActive={setFirstTab}
        closeAll={closeAllTabs}
        url="https://pag-test-fastapi.herokuapp.com/1"
      />
      <TabBtn
        title="Sed vehicula neque"
        active={secondTab}
        setActive={setSecondTab}
        closeAll={closeAllTabs}
        url="https://pag-test-fastapi.herokuapp.com/2"
      />
      <TabBtn
        title="Nulla id libero pretium"
        active={thirdTab}
        setActive={setThirdTab}
        closeAll={closeAllTabs}
        url="https://pag-test-fastapi.herokuapp.com/3"
      />
    </StyledUl>
  );
};

export default TabsList;
