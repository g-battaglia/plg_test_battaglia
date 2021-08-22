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
        active={firstTab}
        setActive={setFirstTab}
        closeAll={closeAllTabs}
      />
      <TabBtn
        active={secondTab}
        setActive={setSecondTab}
        closeAll={closeAllTabs}
      />
      <TabBtn
        active={thirdTab}
        setActive={setThirdTab}
        closeAll={closeAllTabs}
        content={`Vestibulum at odio sit amet diam consectetur congue.", "Donec imperdiet
        tincidunt nisi non dignissim.", "Maecenas diam metus, fermentum a velit
        ut, auctor consequat ligula.", "In ultrices lobortis venenatis.",
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        posuere cubilia Curae; Quisque dignissim sit amet lectus ac tincidunt.",
        "Quisque bibendum mi at tempus tempus.", "Suspendisse pretium, quam eu
        faucibus cursus, nunc leo pharetra justo, ut rutrum lorem ipsum quis
        velit.", "Aenean imperdiet molestie dignissim.", "Curabitur faucibus
        nulla metus, vel ornare libero accumsan eget.`}
      />
    </StyledUl>
  );
};

export default TabsList;
