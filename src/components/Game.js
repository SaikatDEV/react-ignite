import React from "react";

// Styling
import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({ name, released, image }) => {
  return (
    <StyledGame>
      <h3>Game: {name}</h3>
      <p>Release Date: {released}</p>
      <img src={image} alt="Image" />
    </StyledGame>
  );
};

const StyledGame = styled.div`
  min-height: 30vh;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.3);
  text-align: center;
  border-radius: 1rem;
  img {
    width: 80%;
    height: 40vh;
    object-fit: cover;
    padding-bottom: 1rem;
  }
`;

export default Game;
