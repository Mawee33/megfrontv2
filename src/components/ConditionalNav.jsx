import React from "react";

import { useAuth } from "./../auth/useAuth";
import NavAdmin from "./NavAdmin";
import NavMain from "./NavMain";
import NavUser from "./NavUser";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

export default function ConditionalNav(props) {
  // const userContext = useContext(UserContext);
  //   const { setCurrentUser } = userContext;

  const { currentUser, isLoading } = useAuth();

  if (isLoading) return null;
  return (
    <>
    <div className="search-into">
      {!currentUser && <NavMain className="nav-search"/>}
      {currentUser && currentUser.role === "user" && <NavUser className="nav-search"/>}
      {currentUser && currentUser.role === "admin" && <NavAdmin className="nav-search"/>}
      <div className="search-icon">
      <FontAwesomeIcon icon={faSearch} className="loupe"/>
      <p>&nbsp;</p>
      <SearchBar  className="search-in" searchClbk={props.searchClbk}/>
      </div>
      </div>
    </>
  );
}
