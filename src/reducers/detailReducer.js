// This below is a initial variable, How they will look like
const initState = {
  detailOfTheGame: { platforms: [] },
  screenshots: { results: [] },
  isLoading: true,
};

// Reducer
// We are sending payload below (popular: action.payload.popular ) to update the above popular array
const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        detailOfTheGame: action.payload.game,
        screenshots: action.payload.screen,
        isLoading: false,
      };
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: true,
      };

    default:
      return { ...state };
  }
};

export default detailReducer;
