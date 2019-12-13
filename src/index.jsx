import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import "./styles/footer.css";
import "./styles/reset.css";
import "./styles/vetements.css";
import "./styles/vetement.css";
import "./styles/lingeries.css";
import "./styles/menu.css";
import "./styles/notfound.css";
import "./styles/sign.css";
import "./styles/histoire.css";
import "./styles/fabrication.css";
import "./styles/form.css";
import "./styles/search.css";
import "./styles/contact.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
