import React, {useState, useEffect} from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const ListeLingeries = props => {
    const [lingeries, setLingeries] = useState([]);

    useEffect(() => {
        axios
        .get(process.env.REACT_APP_BACKEND_URL + "/lingeries")
        .then(res => {
            setLingeries(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);
  return (
    <div className="background">
      <h1 className="title-vetements">Lingerie</h1>
   <div className="all-vetements">
   {!lingeries.length ? (
            <p>Aucune lingerie disponible</p>
          ) : (
            lingeries.map((l, i) => (
              <ul key={i} className="list-vetements">
                <li className="item-vetement">
                <div>
                  <a href={"/lingeries/" + l._id}>
                    <img
                      src={l.image}
                      alt={l.name}
                      className="item-vetement-image"
                    />
                  </a>
                </div>
                    </li>
                <li className="item-vetement" id="name">{l.name}</li>
                <li className="item-vetement">{l.description}</li>
                {/* <li className="item-vetement">{l.type}</li>
                <li className="item-vetement">{l.color}</li> */}
                {/* <li className="item-vetement">{l.size}</li> */}
                <li className="item-vetement">{l.price}€</li>
                {/* <li className="item-vetement">{l.quantity}</li> */}
                </ul>
                ))
          )}
   </div>
    </div>
  );
}

export default ListeLingeries;
