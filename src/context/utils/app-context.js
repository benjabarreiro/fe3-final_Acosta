const appTheme = sessionStorage.getItem("theme");
const favsDentists = JSON.parse(sessionStorage.getItem("favs"));

const editFavsDentists = (dentists) => sessionStorage.setItem("favs", dentists);
export const getUserLoggedIn = sessionStorage.getItem("auth") || false;

export const initialState = {
  appTheme: appTheme || "light",
  dentists: [],
  favsDentists: favsDentists || [],
  //isLogged: true,
  userLogged: { name: "", password: "" },
};

export const initialContext = {
  ...initialState,
  themeHandler: (theme) => {},
  handleLogin: () => {},
  handleLogout: () => {},
  editFavsDentists: (dentist) => {},
  deleteAllFavsDentits: () => {},
};
