import React, { useState, useEffect } from "react";
import axios from "axios";


const Lingerie = props => {
  console.log(props);
  const lingerieId = props.match.params.id;
  const [lingerie, setLingerie] = useState(null);
  console.log(props.cart);
  // const [vetement, setVetement] = useState(null);
  const [size, setSize] = useState(null);
  const [qty, setQty] = useState(1);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/lingeries/" + lingerieId)
      .then(res => {
        setLingerie(res.data);
        setSize(res.data.size[0]);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const myCart = {
      lingerie: lingerie,
      size: size,
      quantity: qty
    };
    // localStorage.setItem("cart", JSON.stringify(myCart));
    props.handleCart(myCart);
    // const copy = [...props.cart];
    // copy.push(myCart);
    // props.handleCart(copy);
    // console.log(copy)
    // localStorage.setItem("cart", JSON.stringify(copy));
    // props.history.push("/ShoppingCart");
  };

  const handleChange = e => {
    if (e.target.name === "size") {
      setSize(e.target.value);
    } else setQty(e.target.value);
    console.log("here", e.target.value);
    console.log(e.target.name);
    // let size = e.target.size;
    // let quantity = e.target.quantity;

    // setState({vetement:{...vetement, }})
  };

  if (!lingerie) return <p>Pas de lingerie</p>;
  return (
    <form
    onSubmit={handleSubmit}
    onChange={handleChange}
    className="background"
  >
      <ul className="one-vetements">
        <li className="item-vetement">
          <img
            src={lingerie.image}
            alt={lingerie.name}
            className="one-vetement-image"
          />
        </li>
        <div className="text-vetement">
          <li className="item-vetement" id="name">{lingerie.name}</li>
          <li className="item-vetement">
            description : {lingerie.description}
          </li>
          <li className="item-vetement">catégorie : {lingerie.type}</li>
          <li className="item-vetement">couleur : {lingerie.color}</li>
          <li className="item-vetement">
            taille :
            {lingerie.length < 2 ? (
              <select type="checkbox">{lingerie.size}</select>
            ) : (
              <select type="checkbox">
                {lingerie.size
                  .sort((a, b) => a - b)
                  .map((size, i) => (
                    <option key={i}>{size}</option>
                  ))}
              </select>
            )}
          </li>
          <li className="item-vetement">prix : {lingerie.price}€</li>
          <li className="item-vetement">
            quantité :
            {lingerie.length < 2 ? (
              <select type="checkbox">{lingerie.quantity}</select>
            ) : (
              <select type="checkbox">
                {lingerie.quantity
                  .sort((a, b) => a - b)
                  .map((quantity, i) => (
                    <option key={i}>{quantity}</option>
                  ))}
              </select>
            )}{" "}
          </li>
          <li>
            <button className="button">Ajouter au panier</button>
          </li>
        </div>
      </ul>
    </form>
  );
};
export default Lingerie;

