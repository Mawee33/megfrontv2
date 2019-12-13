import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";
// import vetementModel from "./../models/Vetement";
import APIHandler from "./../api/APIHandler";
import UserContext from "../auth/UserContext";

const ManageProducts = ()=> {
  const userContext = useContext(UserContext);
  const { setCurrentUser } = userContext;

    return (
      <div>
        <h1 className="title-vetements">Créer un article</h1>
        <div className="buttons">
        <a href="/create-vetement" className="manage-button">
          Créer un vêtement
        </a>
        <a href="/create-lingerie" className="manage-button">
         Créer une lingerie
        </a>
      </div>
      </div>
    );
  }

//   <div className="buttons">
//         <button className="button" id="manage-button">Créer un vétement</button>
//         <button className="button" id="manage-button">Créer une lingerie</button>
//       </div>

  export default ManageProducts;
