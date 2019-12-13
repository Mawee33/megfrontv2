import React from "./node_modules/react";
import Dropdown from "./Dropdown";

const Menu = () => {
  return (
    <div className="background">
      <h1>Menu</h1>

      <div className="list-menu">
        <a href="/vetements" className="item-menu">
          Vêtements
        </a>
        <a href="/lingeries" className="item-menu">
          Lingerie
        </a>
      </div>
    </div>
  );
};

export default Menu;
