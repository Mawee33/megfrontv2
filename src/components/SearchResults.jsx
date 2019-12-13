import React from "react";
import { Link } from "react-router-dom";

export default function SearchResults({ data }) {
  return (
    <div className="search-results">
      {!data.length ? null : (
        <React.Fragment>
          <div className="category vetements">
            <h2 className="title search">Résultats de votre recherche vêtements</h2>
            <ul className="searchlist">
              {data[0].length &&
                data[0].map((v, i) => (
                  <li key={i} className="item">
                    <Link className="link" to={`/vetements/${v._id}`}>
                      {v.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className="category lingerie">
            <h2 className="title search">Résultats de la recherche lingerie</h2>
            <ul className="searchlist">
              {data[1].length &&
                data[1].map((v, i) => (
                  <li key={i} className="item">
                    <Link className="link" to={`/lingeries/${v._id}`}>
                      {v.name}
                    </Link>
                  </li>
                ))}
            </ul>
            
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
