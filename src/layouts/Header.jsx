import { NavLink } from "react-router-dom";
import "../sass/layouts/_header.scss";
import image from "../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <img src={image} alt="logo sportsee" className="header__logo" />
      </NavLink>

      <nav className="header__navigation">
        <NavLink to="/" className="header__navigation--link">
          Accueil
        </NavLink>
        <NavLink to="/" className="header__navigation--link">
          Profil
        </NavLink>
        <NavLink to="/" className="header__navigation--link">
          Réglage
        </NavLink>
        <NavLink to="/" className="header__navigation--link">
          Communauté
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
