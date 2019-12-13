import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import UserContext from "./../auth/UserContext";
import APIHandler from "./../api/APIHandler";

export default withRouter(function Signin(props) {
  const [email, setEmail] = useState("meg@meg.com");
  const [password, setPassword] = useState("12345");
  const userContext = useContext(UserContext);
  const { setCurrentUser } = userContext;

  const handleSubmit = async e => {
    console.log("heloo", props);
    e.preventDefault();
    try {
      const apiRes = await APIHandler.post("/signin", { email, password });
      setCurrentUser(apiRes.data.currentUser);
      props.navMobileStatus();
      props.history.push("/");
    } catch (err) {
      console.log(err);
      setCurrentUser(null);
    }
  };

  return (
    <React.Fragment>
      <div className="signin">
        <form className="form" onSubmit={handleSubmit}>
          <h3 className="connection">Connectez-vous</h3>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label className="label" htmlFor="password">
            Mot de passe
          </label>
          <input
            className="input"
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button className="btn-sign">ok</button>
        </form>
        <p className="client">
          Créer votre compte{" "}
          <Link to="/signup" className="link">
            Ici
          </Link>
        </p>
      </div>
    </React.Fragment>
  );
});
