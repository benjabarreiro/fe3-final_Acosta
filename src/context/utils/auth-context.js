const getUserLoggedIn = JSON.parse(localStorage.getItem("auth")) || "";

export const initialState = {
  isLogged: !!getUserLoggedIn.length,
  userLogged: getUserLoggedIn,
};

export const initialContext = {
  ...initialState,
  handleLogin: () => {},
  handleLogout: () => {},
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
