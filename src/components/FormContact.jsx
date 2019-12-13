import React, { Component } from "react";
import apiHandler from "./../api/APIHandler";
import "./../styles/form.css";

export default class FormContact extends Component {
  state = {
    message: null,
    from: null,
    subject: null
  };

  handleSubmit = async evt => {
    evt.preventDefault();
    try {
      const apiRes = await apiHandler.post("/contact", this.state);
      console.log(apiRes);
    } catch (apiErr) {
      console.log(apiErr);
    }
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    return (
      <div className="contact">
        <form
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          className="form"
        >
          <h4 className="connection2">On reste en contact</h4>
          <label className="label" htmlFor="from">
            Votre email
          </label>
          <input className="input" id="from" type="text" name="from" />
          <label className="label" htmlFor="subject">
            Votre message
          </label>
          <input className="input-message" id="subject" type="text" name="subject" />
          <label className="label" htmlFor="message">
            Exprimez-vous !
          </label>
          <textarea
            className="input"
            name="message"
            id="message"
            cols="30"
            rows="10"
          ></textarea>
          <button className="btn-sign">Validez</button>
        </form>
      </div>
    );
  }
}
