const appTheme = localStorage.getItem("theme");
const favsDentists = JSON.parse(localStorage.getItem("favs"));

const editFavsDentists = (dentists) =>
  localStorage.setItem("favs", JSON.stringify(dentists));

const getUserLoggedIn = JSON.parse(localStorage.getItem("auth")) || {
  email: "",
  password: "",
};

export const isInList = (list, id) => {
  return list.find((item) => id === item.id);
};

export const initialState = {
  appTheme: appTheme || "light",
  dentists: [],
  favsDentists: favsDentists || [],
  isLogged: !!getUserLoggedIn.email.length,
  userLogged: getUserLoggedIn,
};

export const initialContext = {
  ...initialState,
  themeHandler: (theme) => {},
  handleLogin: () => {},
  handleLogout: () => {},
  editFavsDentists: (dentist) => {},
  deleteAllFavsDentits: () => {},
  showFavButton: (id) => {},
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "theme":
      return { ...state, appTheme: action.payload };
    case "getAllDentists":
      return { ...state, dentists: action.payload };
    case "login":
      return { ...state, ...action.payload };
    case "editFavsDentist":
      let favs = state.favsDentists;
      let newFavsList;

      if (!isInList(state.favsDentists, action.payload.id)) {
        newFavsList = [...state.favsDentists, action.payload];
        editFavsDentists(newFavsList);
        return { ...state, favsDentists: newFavsList };
      } else {
        newFavsList = favs.filter((fav) => fav.id !== action.payload.id);
        editFavsDentists(newFavsList);
        return { ...state, favsDentists: newFavsList };
      }
    case "deleteAllFavsDentits":
      return { ...state, favsDentists: [] };
    default:
      return state;
  }
};
