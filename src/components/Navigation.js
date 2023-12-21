import { Link as NavLink } from "react-router-dom";

import NavLogo from "../assets/nav-logo.png";
import MenuImage from "../assets/menu.webp";
import { Link as ScrollLink } from "react-scroll";

const Navigation = props => {
  return (
    <menu className={`navbar-menu ${props.device}`}>
      {props.device === "mobile" ? (
        ""
      ) : (
        <li>
          <NavLink to="/">
            <img
              src={NavLogo}
              alt="Little Lemon logo"
              className="nav-image"
            />
          </NavLink>
        </li>
      )}
      <li>
        <NavLink className="hover-effect" to="/">
          <h1>Home</h1>
        </NavLink>
      </li>
      <li>
        <ScrollLink className="hover-effect" to="about" smooth={true} duration={500}>
          <h1>About</h1>
        </ScrollLink>
      </li>
      <a
        className="hover-effect"
        href={MenuImage}
        target="_blank"
        rel="noreferrer"
      >
        <h1>Menu</h1>
      </a>
      <NavLink className="hover-effect" to="/reservations">
        <h1>Reservations</h1>
      </NavLink>
      <NavLink className="hover-effect" to="/order">
        <h1>Order</h1>
      </NavLink>
      <NavLink className="hover-effect" to="/login">
        <h1>Login</h1>
      </NavLink>
    </menu>
  );
}

export default Navigation;