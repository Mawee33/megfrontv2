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

const NavAdmin = props => {
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
    currentUser &&
    currentUser.role === "admin" && (
      <nav id="nav_admin" className="nav-main">
        <React.Fragment>
          <Dropdown />
          <div className="all-list">
            <div className="nav-end2">
              <div className="nav-logo">
                <NavLink
                  exact
                  className="link"
                  activeClassName="is-active"
                  to="/"
                >
                  <img
                    src="https://res.cloudinary.com/dfnnpxhx9/image/upload/v1576138123/MEG/Text_logo_2_mnback.jpg"
                    alt="MEG"
                  />
                </NavLink>
              </div>

              <NavLink className="link" activeClassName="is-active" to="/">
                <FontAwesomeIcon icon={faSearch} />
                <p>&nbsp;</p>
                <input className="search" type="text" />
              </NavLink>

              <NavLink
                className="link"
                activeClassName="is-active"
                to="/manage-products"
              >
                Gérer mes produits
              </NavLink>
              <a
                className="link"
                activeClassName="is-active"
                onClick={signOut}
              >
                Sign out
              </a>
            </div>
          </div>
        </React.Fragment>
      </nav>
    )
  );
};

export default withRouter(NavAdmin);
