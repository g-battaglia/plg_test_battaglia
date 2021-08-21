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
  }

  .button {
    background: black;
    color: white;
    width: 100%;
    height: 4rem;
    font-size: 1.25rem;
    transition: background 0.2s ease;
    &:hover {
      background: #1f1f1f;
    }
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
      <button className="button btn">Read More</button>
    </StyledSection>
  );
};

export default Card;
