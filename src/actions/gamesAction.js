import axios from "axios";
import { popularGamesURL, upcomingGamesURL, allGamesURL } from "../api/api";

// ACTION Creator
// As we are using thunk, we need to use another arrow func as below:
// This will fetch the games from the URL, After fetch we will dispatch
export const loadGames = () => async (dispatch) => {
  // FETCH AXIOS
  const popularData = await axios.get(popularGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  const allGamesData = await axios.get(allGamesURL());

  // After FETCH, We dispatch
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upComing: upcomingData.data.results,
      allGames: allGamesData.data.results,
    },
  });
};
