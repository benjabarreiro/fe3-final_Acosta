import Home from "../screens/Home";
import Dentist from "../screens/Dentist";
import Favs from "../screens/Favs";
import Login from "../screens/Login";
import Contact from "../screens/Contact";

export const routes = [
  { id: 1, path: "/home", Component: Home },
  { id: 1, path: "/dentist/:id", Component: Dentist },
  { id: 1, path: "/favs", Component: Favs },
  { id: 1, path: "/login", Component: Login },
  { id: 1, path: "/contact", Component: Contact },
];
