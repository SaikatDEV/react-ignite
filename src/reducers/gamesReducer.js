const initState = {
  popular: [],
  upComing: [],
  allGames: [],
  //   searched: [],
};

// Reducer
// We are sending payload below (popular: action.payload.popular ) to update the above popular array
const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upComing: action.payload.upComing,
        allGames: action.payload.allGames,
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
