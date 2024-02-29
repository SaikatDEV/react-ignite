const initState = {
  popular: [],
  newGames: [],
  upComing: [],
  searched: [],
};

// Reducer
const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state };
    default:
      return { ...state };
  }
};

// ACTION Creator
const fetchGames = (userData) => {
  return {
    type: "FETCH_GAMES",
    payload: userData,
  };
};

fetchGames();

export default gamesReducer;
