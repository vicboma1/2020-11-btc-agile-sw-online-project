import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFingerprint } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const logo = <FontAwesomeIcon icon={faFingerprint} className="fingerprint" />;

  return (
    <nav className="navbar">
      <h1>
        {logo}
        Password Generator
      </h1>
      <div className="links">
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/check" activeClassName="active">
          Password Checker
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
