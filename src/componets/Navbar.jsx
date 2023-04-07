import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const { themeHandler, appTheme } = useContext(ThemeContext);
  const { handleLogout } = useContext(AuthContext);
  const manageTheme = () => {
    if (!appTheme) {
      themeHandler("light");
    } else if (appTheme === "dark") {
      themeHandler("light");
    } else if (appTheme === "light") {
      themeHandler("dark");
    }
  };
  return (
    <header className="sticky-top">
      <nav
        className={`navbar navbar-expand-sm navbar-${appTheme} bg-${appTheme}`}
        aria-label="Third navbar example"
      >
        <div className="container">
          <Link
            className={`navbar-brand ${styles.navbarBrand} ${appTheme}`}
            to="/home"
          >
            DH Odonto
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarsExample03"
          >
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link className={`nav-link ${appTheme}`} to="/home">
                  Home
                </Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link className={`nav-link ${appTheme}`} to="/favs">
                  Favorites
                </Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link className={`nav-link ${appTheme}`} to="/contact">
                  Contact
                </Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link
                  className={`nav-link ${appTheme}`}
                  onClick={() => handleLogout()}
                  to="/login"
                >
                  Log out
                </Link>
              </li>

              <li className={`nav-item`}>
                <button
                  className={`btn btn-light${styles.btnStyle}`}
                  onClick={manageTheme}
                >
                  ☀ 🌙{" "}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
