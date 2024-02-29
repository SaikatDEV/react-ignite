// STORE
// This is a root reducer , SO we can combine multiple
import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import userInfoReducer from "./userInfoReducer";
// import navReducer from "./gamesReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
  userInfo: userInfoReducer,
  //   nav: navReducer,
});

export default rootReducer;
