import React, { Component } from "react";
import { Link } from "react-router-dom";
import APIHandler from "./../api/APIHandler";

export default class Signup extends Component {
  state = {
    userName: "meg",
    email: "meg@meg.com",
    password: "12345",
    address: {
      street: "adresse",
      zipCode: "12345",
      city: "Paris"
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      await APIHandler.post("/signup", this.state);
      this.props.history.push("/signin");
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = e => {
    console.log(e.target);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password, userName } = this.state;
    return (
      <React.Fragment>
        <div className="signup">
          <form
            className="form"
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
          >
            <h3 className="connection">Connectez-vous</h3>
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              className="input"
              id="email"
              type="email"
              name="email"
              defaultValue={email}
            />

            <label className="label" htmlFor="username">
              Votre identifiant
            </label>
            <input
              className="input"
              id="username"
              type="text"
              name="userName"
              defaultValue={userName}
            />

            <label className="label" htmlFor="password">
              Votre mot de passe
            </label>
            <input
              className="input"
              id="password"
              type="password"
              name="password"
              defaultValue={password}
            />
            <label className="label" htmlFor="street">
              Votre adresse
            </label>
            <input
              className="input"
              id="street"
              type="text"
              defaultValue={this.street}
            />

            <label className="label" htmlFor="zipCode">
              Code Postal
            </label>
            <input
              className="input"
              id="zipCode"
              type="number"
              length="5"
              defaultValue={this.zipCode}
            />

            <label className="label" htmlFor="city">
              Ville
            </label>
            <input
              className="input"
              id="city"
              type="text"
              defaultValue={this.city}
            />
            <button className="btn-sign">
              Validez
              <Link to="/signup" className="link"></Link>{" "}
            </button>

            <h4 className="client">
              Déjà un compte ?{" "}
              <Link to="/signin" className="link2">
                Cliquez ici
              </Link>
            </h4>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
