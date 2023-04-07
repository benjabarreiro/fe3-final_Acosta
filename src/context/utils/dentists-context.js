const favsDentists = JSON.parse(localStorage.getItem("favs"));

const editFavsDentists = (dentists) =>
  localStorage.setItem("favs", JSON.stringify(dentists));

export const isInList = (list, id) => {
  return list.find((item) => id === item.id);
};

export const initialState = {
  dentists: [],
  favsDentists: favsDentists || [],
};

export const initialContext = {
  ...initialState,
  editFavsDentists: (dentist) => {},
  deleteAllFavsDentits: () => {},
  showFavButton: (id) => {},
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "getAllDentists":
      return { ...state, dentists: action.payload };
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
