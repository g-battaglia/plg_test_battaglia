import React from "react";
import styled from "styled-components";

const p = process.env.PUBLIC_URL;

const StyledSection = styled.section`
  width: 100%;
  text-align: center;
  .title {
    overflow: hidden;
    height: 100px;

    // zoom and center the image
    background-image: url(${p}/img/card-play-harder.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .body {
    padding: 3rem;
    background-color: #fff;
  }

  .button {
    background: black;
    color: white;
    width: 100%;
    height: 4rem;
    font-size: 1.25rem;
  }
`;

const Card = () => {
  return (
    <StyledSection>
      <div className="title"></div>
      <div className="body">
        <p>
          Aenean mollis dolor a mattis viverra. In hac habitasse platea
          dictumst. Curabitur tempus dui tortor, et bibendum lacus eleifend ut.
        </p>
      </div>
      <button className="button btn">Read More</button>
    </StyledSection>
  );
};

export default Card;
