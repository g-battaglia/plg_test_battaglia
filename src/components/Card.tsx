import React from "react";
import styled from "styled-components";

const p = process.env.PUBLIC_URL;

const StyledSection = styled.section`
  text-align: center;
  .head {
    overflow: hidden;
    height: 100px;
    // zoom and center the image
    // process.env.PUBLIC_URL + "/img/card-play-harder.png";
    background-color: black;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .body {
    padding: 3rem;
    background-color: #fff;
    height: calc(100% - 4rem - 100px);
    font-weight: 300;
  }

  .button {
    width: 100%;
    height: 3rem;
    font-size: 1rem;
  }
`;

type Props = {
  head: string;
  body: string;
};

const Card = ({ head, body }: Props) => {
  return (
    <StyledSection>
      <div
        className="head"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + head})`,
        }}
      />
      <div className="body">
        <p>{body}</p>
      </div>
      <button className="button btn btn-dark">Read More</button>
    </StyledSection>
  );
};

export default Card;
