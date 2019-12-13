import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";

const NavMain = () => {
  return (
    <nav className="nav-main">
      <Dropdown />
      <div className="all-list">
        {/* <div className="nav-menu">
          <li>
            <NavLink to="/menu">
              <FontAwesomeIcon icon={faBars} />
              <p>&nbsp;</p>
              Menu
            </NavLink>
          </li>
        </div> */}

        <div className="nav-end">
          <div className="logo">
            <NavLink exact to="/">
              <img
                src="https://res.cloudinary.com/dfnnpxhx9/image/upload/v1576138123/MEG/Text_logo_2_mnback.jpg"
                alt="MEG"
              />
            </NavLink>
          </div>
          <NavLink to="/">
            <FontAwesomeIcon icon={faSearch} />
            <p>&nbsp;</p>
            <input className="search" type="text" />
          </NavLink>

          <NavLink to="/signin">
            <FontAwesomeIcon icon={faUser} />
            <p>&nbsp;</p>
            Connectez-vous
          </NavLink>

          <NavLink to="/ShoppingCart">
            <FontAwesomeIcon icon={faShoppingCart} />
            <p>&nbsp;</p>
            Panier
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavMain;
