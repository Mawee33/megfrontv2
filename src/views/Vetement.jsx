import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const Vetement = props => {
  const vetementId = props.match.params.id;
  const [vetement, setVetement] = useState(null);
  const [size, setSize] = useState(null);
  const [qty, setQty] = useState(1);
  //   const [cart, setCart] = useState([]);
  const [formValues, setFormValues] = useState({});
  const selectRef = useRef();

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/vetements/" + vetementId)
      .then(res => {
        setVetement(res.data);
        setSize(res.data.size[0]);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const myCart = {
      vetement: vetement,
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
    // let size = e.target.size;
    // let quantity = e.target.quantity;

    // setState({vetement:{...vetement, }})
  };
  if (!vetement) return <p>Pas de vetement</p>;

  return (
    <form
      onSubmit={handleSubmit}
      onChange={handleChange}
      className="background"
    >
      <ul className="one-vetements">
        <li className="item-vetement">
          <img
            src={vetement.image}
            alt={vetement.name}
            className="one-vetement-image"
          />
        </li>
        <div className="text-vetement">
          <li className="item-vetement" id="name">{vetement.name}</li>
          <li className="item-vetement">
            description : {vetement.description}
          </li>
          <li className="item-vetement">catégorie : {vetement.type}</li>
          <li className="item-vetement">couleur : {vetement.color}</li>
          <li className="item-vetement">
            taille :
            {vetement.length < 2 ? (
              <select type="checkbox">{vetement.size}</select>
            ) : (
              <select name="size" type="checkbox">
                {vetement.size
                  .sort((a, b) => a - b)
                  .map((size, i) => (
                    <option key={i}>{size}</option>
                  ))}
              </select>
            )}
          </li>
          <li className="item-vetement">prix : {vetement.price}€</li>
          <li className="item-vetement">
            quantité :
            {vetement.length < 2 ? (
              <select type="checkbox">{vetement.quantity}</select>
            ) : (
              <select name="quantity" type="checkbox">
                {vetement.quantity
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

export default Vetement;
