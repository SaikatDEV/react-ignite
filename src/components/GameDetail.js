import React from "react";
import styled from "styled-components";
// Redux
// use Selector for get the data and use them
import { useSelector } from "react-redux";

// create component
const GameDetail = () => {
  // Data
  //   Get the data from state using useSelector
  //   below is a single data retrieve (detail)
  //   const detail = useSelector((state) => state.detailOfTheGame);
  //   We can write above line also as below:
  const { detailOfTheGame, screenshots } = useSelector((state) => state.detail);
  //   console.log(detail);
  // JSX
  return (
    <CardShadow>
      <Detail>
        <div className="stats">
          <div className="rating">
            <h3>Name: {detailOfTheGame.name}</h3>
            <p>Rating: {detailOfTheGame.rating}</p>
          </div>
          <div className="info">
            <h3>Platforms</h3>
            <div className="platforms">
              {detailOfTheGame.platforms.map((eachPlatform) => {
                return (
                  <h3 key={eachPlatform.platform.id}>
                    {eachPlatform.platform.name}
                  </h3>
                );
              })}
            </div>
          </div>
        </div>
        <div className="media">
          <img
            src={detailOfTheGame.backgroundImage}
            alt={detailOfTheGame.name}
          />
        </div>
        <div className="gallery">
          {screenshots.map((eachScreenshot) => {
            return (
              <img
                key={eachScreenshot.id}
                src={eachScreenshot.image}
                alt={eachScreenshot.id}
              />
            );
          })}
        </div>
      </Detail>
    </CardShadow>
  );
};

const CardShadow = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(189, 65, 65, 0.665);
  }

  &::-webkit-scrollbar-track {
    background: White;
  }
`;

const Detail = styled.div`
  background: white;
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 20rem;
  color: black;
  left: 10%;
  /* Absolutely positioned elements can overlap other elements on the page. 
  This can be useful for creating overlays, pop-up dialogs, tooltips, etc. */
  position: absolute;
  img {
    width: 100%;
  }
`;

export default GameDetail;
