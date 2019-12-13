import React, { useContext, useState } from "react";
import UserContext from "../../auth/UserContext";
import APIHandler from "./../../api/APIHandler";
import "./../styles/form.css";

export default function FormEditAccount() {
  const UserContext = useContext(UserContext);
  const { currentUser } = userContext;

  const [newEmail, setEmail] = useState(currentUser ? currentUser.email : "");
  const [newUserName, setUserName] = useState("");
  const [newPassword, setNewPassword] = useState("12345");
  const [oldPassword, setOldPassword] = useState("12345");
  const [newAddressStreet, setNewAddressSreet] = useState("");
  const [newAdressZipCode, setNewAdressZipCode] = useState("12345");
  const [newAdressCity, setNewAdressCity] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(
      newEmail,
      newUserName,
      newPassword,
      oldPassword,
      newAddressStreet,
      newAdressZipCode,
      newAdressCity
    );
  };

  return (
    <form className="form-user" onSubmit={handleSubmit}>
      <h3 className="title-form-user"> Votre compte </h3>

      <div>
        <p>Bienvenue {currentUser.userName} </p>
        <h3 className="title-form-user">Créer votre compte</h3>
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input
          className="input"
          id="email"
          defaultValue={currentUser.email}
          onChange={e => setEmail(e.target.value)}
        />

        <label htmlFor="userName">Mon identifiant</label>
        <input
          className="input"
          id="userName"
          type="text"
          defaultValue={currentUser.name}
          onChange={e => setUserName(e.target.value)}
        />

        <label htmlFor="password">Ancien mot de passe</label>
        <input
          className="input"
          id="oldPassword"
          type="password"
          placeholder="Votre mot de passe"
          onChange={e => setOldPassword(e.target.value)}
        />

        <label html="password">Nouveau mot de passe</label>
        <input
          className="input"
          id="newPassword"
          type="password"
          placeholder="Votre nouveau mot de passe"
          onChange={e => setNewPassword(e.target.value)}
        />

        <label html="address">Votre adresse</label>
        <input
          className="input"
          id="street"
          type="text"
          defaultValue={currentUser.address.street}
          onChange={e => setNewAddressSreet(e.target.value)}
        />

        <label htmlFor="zipCode">Code Postal</label>
        <input
          className="input"
          id="zipCode"
          type="number"
          length="5"
          defaultValue={currentUser.address.zipCode}
          onChange={e => setNewAdressZipCode(e.target.value)}
        />

        <label htmlFor="city">Ville</label>
        <input
          className="input"
          id="city"
          type="text"
          defaultValue={currentUser.address.city}
          onChange={e => setNewAdressCity(e.target.value)}
        />

        <button className="btn">Validez</button>
      </div>
    </form>
  );
}
