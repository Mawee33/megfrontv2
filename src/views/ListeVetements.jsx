import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const ListeVetements = props => {
  const [vetements, setVetements] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/vetements")
      .then(res => {
        setVetements(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div className="background">
      <h1 className="title-vetements">Vetements</h1>
      <div className="all-vetements">
        {!vetements.length ? (
          <p>Aucun vêtement disponible</p>
        ) : (
          vetements.map((v, i) => (
            <ul key={i} className="list-vetements">
              <li className="item-vetement">
                <div>
                  <a href={"/vetements/" + v._id}>
                    <img
                      src={v.image}
                      alt={v.name}
                      className="item-vetement-image"
                    />
                  </a>
                </div>
              </li>
              <li className="item-vetement" id="name">{v.name}</li>
              <li className="item-vetement">{v.description}</li>
              {/* <li className="item-vetement">{v.type}</li>
                <li className="item-vetement">{v.color}</li> */}
              {/* <li className="item-vetement">{v.size}</li> */}
              <li className="item-vetement">{v.price}€</li>
              {/* <li className="item-vetement" >{v.quantity}</li> */}
              <div class="card-img-overlay d-flex justify-content-end align-items-end">
                <button
                  type="button"
                  class="btn btn-light rounded-circle"
                  data-toggle="button"
                  aria-pressed="false"
                  autocomplete="off"
                >
                  <FontAwesomeIcon icon={faHeart} />
                  {/* <i class="far fa-heart"></i> */}
                </button>
              </div>
            </ul>
          ))
        )}
      </div>
    </div>
  );
};

export default ListeVetements;
