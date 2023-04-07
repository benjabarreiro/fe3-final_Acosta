import Home from "../routes/Home";
import Dentist from "../routes/Dentist";
import Favs from "../routes/Favs";
import Login from "../routes/Login";
import Contact from "../routes/Contact";

export const routes = [
  { id: 1, path: "/home", Component: Home },
  { id: 2, path: "/dentist/:id", Component: Dentist },
  { id: 3, path: "/favs", Component: Favs },
  { id: 4, path: "/contact", Component: Contact },
];

export { Login };
