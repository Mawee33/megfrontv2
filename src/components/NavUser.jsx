import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";
import UserContext from "./../auth/UserContext";
import APIhandler from "./../api/APIHandler";
import { useAuth } from "./../auth/useAuth";
import SearchBar from "./SearchBar";

const NavUser = props => {
  const { currentUser, isLoading } = useAuth();
  const userContext = useContext(UserContext);
  const { setCurrentUser } = userContext;

  function signOut() {
    console.log(props);
    APIhandler.post(`/signout`).finally(() => {
      setCurrentUser(null);
      props.history.push("/");
    });
  }

  if (isLoading) return null;

  return (
    <nav id="nav_admin" className="nav-main">
      <React.Fragment>
        <Dropdown />
        <div className="all-list">
          <div className="nav-end">
            <div className="nav-logo">
              <NavLink exact to="/">
                <img
                  src="https://res.cloudinary.com/dfnnpxhx9/image/upload/v1576138123/MEG/Text_logo_2_mnback.jpg"
                  alt="MEG"
                />
              </NavLink>
            </div>
            {/* <NavLink to="/">
              <FontAwesomeIcon icon={faSearch} />
              <SearchBar searchClbk={props.searchClbk} />
              <p>&nbsp;</p>
            <input className="search" type="text" /> 
            </NavLink> */}

            <a
              className="link-signout"
              // activeClassName="is-active"
              onClick={signOut}
            >
              <FontAwesomeIcon icon={faUser} />
              <p>&nbsp;</p>
              Deconnexion
            </a>

            <NavLink to="/ShoppingCart">
              <FontAwesomeIcon icon={faShoppingCart} />
              <p>&nbsp;</p>
              Panier
            </NavLink>
          </div>
        </div>
      </React.Fragment>
    </nav>
  );
};

export default withRouter(NavUser);
