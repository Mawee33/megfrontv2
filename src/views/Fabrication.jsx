import React from "react";
import { Link } from "react-router-dom";

export default function Fabrication() {
  return (
    <div className="fabrication">
      En cours de création
      <br /> Retournez à &nbsp;
      <Link to="/">la page d'accueil</Link>
    </div>
  );
}