import axios from "axios";
import { gameDetailsURL, gameScreenshotsURL } from "../api/api";

// ACTION Creator
// As we are using thunk, we need to use another arrow func as below:
// This will fetch the games from the URL, After fetch we will dispatch them for diff tyle
export const loadDetail = (id) => async (dispatch) => {
  // FETCH AXIOS
  const detailData = await axios.get(gameDetailsURL(id));
  const screenshotsData = await axios.get(gameScreenshotsURL(id));

  // After FETCH, We will dispatch
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenshotsData.data.results,
    },
  });
};
