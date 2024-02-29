// This below is user reducer------------------------------
const initialUserState = {
  name: "",
  isLoggedIn: false,
};

const userInfoReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case "type1":
      return { ...state };
    default:
      return { ...state };
  }
};
// This above is user reducer------------------------------

export default userInfoReducer;
