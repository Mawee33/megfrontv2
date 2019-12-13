import React from "react";

class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  render() {
    return (
      <div className="dropdown">
        <div className="clearfix">
          <div className="button" onClick={this.showDropdownMenu}>
            {" "}
            Menu
            <figure className="expand">
              <i className="fa fa-close"></i>
            </figure>
          </div>
        </div>

        {this.state.displayMenu ? (
          <ul className="deroulant">
            <li>
              <a className="active" href="/vetements">
                Vêtements
              </a>
            </li>
            <li>
              <a href="/Lingeries">Lingerie</a>
            </li>
            <li>
              <a href="/Histoire">Histoire de la marque</a>
            </li>
            <li>
              <a href="/Fabrication">Fabrication des produits</a>
            </li>
            <li>
              <a href="/User">Votre compte</a>
            </li>
            <li>
              <a href="/Contact">On reste en contact</a>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;
