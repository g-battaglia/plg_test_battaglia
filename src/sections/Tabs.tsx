import styled from "styled-components";
import { TabsList } from "../components/Tabs";
const StyledSection = styled.section`
  padding: 4rem 0;
  position: relative;
`;

const Tabs = () => {
  return (
    <StyledSection>
      <div className="container">
        <TabsList />
      </div>
    </StyledSection>
  );
};

export default Tabs;
