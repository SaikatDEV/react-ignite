import React, { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
// Styling
import styled from "styled-components";
import { motion } from "framer-motion";
// components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
import { useLocation } from "react-router-dom";

const Home = () => {
  // Get the current location
  const location = useLocation();
  // console.log(location.pathname);
  const pathId = location.pathname.split("/")[2];

  // FETCH GAMES
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //   Get the data from state using useSelector
  //   const games = useSelector((state) => state.games);
  //   We can write above line also as below:
  const { popular, upComing, allGames } = useSelector((state) => state.games);
  //   console.log(games);
  // {pathId && <GameDetail />}

  return (
    <StyledGameList>
      <h2>Upcoming Games</h2>
      <StyledGames>
        {upComing.map((eachGame) => {
          return (
            <Game
              name={eachGame.name}
              released={eachGame.released}
              id={eachGame.id}
              image={eachGame.background_image}
              key={eachGame.id}
            />
          );
        })}
      </StyledGames>
      <h2>Popular Games</h2>
      <StyledGames>
        {popular.map((eachGame) => {
          return (
            <Game
              name={eachGame.name}
              released={eachGame.released}
              id={eachGame.id}
              image={eachGame.background_image}
              key={eachGame.id}
            />
          );
        })}
      </StyledGames>
      <h2>All Games</h2>
      <StyledGames>
        {allGames.map((eachGame) => {
          return (
            <Game
              name={eachGame.name}
              released={eachGame.released}
              id={eachGame.id}
              image={eachGame.background_image}
              key={eachGame.id}
            />
          );
        })}
      </StyledGames>
    </StyledGameList>
  );
};

const StyledGameList = styled.div`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const StyledGames = styled.div`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
`;

export default Home;
