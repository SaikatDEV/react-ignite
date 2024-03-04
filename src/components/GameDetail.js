import React from "react";
import styled from "styled-components";
// Redux
// use Selector for get the data and use them
import { useSelector } from "react-redux";
// History
import { useNavigate } from "react-router-dom";

// create component
const GameDetail = () => {
  const navigate = useNavigate();
  const exitDetailHandler = (e) => {
    const shadowElement = e.target;
    // console.log(e.target);
    if (shadowElement.classList.contains("cardShadow")) {
      navigate("/");
    }
  };

  // Data
  //   Get the data from state using useSelector
  //   below is a single data retrieve (detail)
  //   const detail = useSelector((state) => state.detailOfTheGame);
  //   We can write above line also as below:
  const { detailOfTheGame, screenshots, isLoading } = useSelector(
    (state) => state.detail
  );
  //   console.log(detail);

  // JSX
  return (
    <>
      {!isLoading && (
        <StyledCardShadow className="cardShadow" onClick={exitDetailHandler}>
          <StyledDetail>
            <StyledStats>
              <div className="rating">
                <h3>Name: {detailOfTheGame.name}</h3>
                <h3>WebSite: {detailOfTheGame.website}</h3>
                <p>Rating: {detailOfTheGame.rating}</p>
              </div>
              <StyledInfo>
                <h3>Platforms:</h3>
                <StyledPlatforms>
                  {detailOfTheGame.platforms.map((eachPlatform) => {
                    return (
                      <h3 key={eachPlatform.platform.id}>
                        {eachPlatform.platform.name}
                      </h3>
                    );
                  })}
                </StyledPlatforms>
              </StyledInfo>
            </StyledStats>
            <StyledMedia>
              <img
                src={detailOfTheGame.background_image}
                alt={detailOfTheGame.background_image}
              />
              <p>{detailOfTheGame.description}</p>
            </StyledMedia>
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
          </StyledDetail>
        </StyledCardShadow>
      )}
    </>
  );
};

const StyledCardShadow = styled.div`
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

const StyledDetail = styled.div`
  background: white;
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  color: black;
  left: 10%;
  /* Absolutely positioned elements can overlap other elements on the page. 
  This can be useful for creating overlays, pop-up dialogs, tooltips, etc. */
  position: absolute;
  img {
    width: 100%;
  }
`;

const StyledStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledInfo = styled.div`
  text-align: center;
`;

const StyledPlatforms = styled.div`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const StyledMedia = styled.div`
  margin-top: 3rem;
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
  p {
    padding: 1rem 0rem;
  }
`;

export default GameDetail;
