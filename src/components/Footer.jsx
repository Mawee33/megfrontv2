import React from "react";
// import { Footer } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div className="transition">
          <h2>RETROUVEZ-NOUS SUR LES RESEAUX SOCIAUX</h2>
        </div>
        <div className="logos-socialmedias">
          <div>
            <FontAwesomeIcon icon={["fab", "instagram"]} /> <p>&nbsp;</p>
          </div>
          <div>
            <FontAwesomeIcon icon={["fab", "pinterest"]} /> <p>&nbsp;</p>{" "}
          </div>

          <div>
            <FontAwesomeIcon icon={["fab", "facebook"]} />
          </div>
        </div>

        <div id="infos-footer">
          <div className="last-info">
            <h6>LIVRAISON</h6>
            <p className="legal">Au choix : Colissimo ou Chronopost</p>
          </div>
          <div className="last-info">
            <h6>PAIEMENT</h6>
            <p className="legal">100% sécurisé CB ou PayPal</p>
          </div>
          <div className="last-info">
            <h6>RETOURS</h6>
            <p className="legal">Satisfait ou remboursé </p>
          </div>
          <div className="last-info">
            <h6>FRAIS DE PORT</h6>
            <p className="legal">Offerts à partir de 80€ d'achat (France)</p>
          </div>
        </div>

        <div className="signature"> Marie et Véro - dec 2019 - &copy; MEG </div>
      </footer>
    </div>
  );
};
export default Footer;
