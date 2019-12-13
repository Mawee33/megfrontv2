import React, { useState, useEffect } from "react";
import axios from "axios";
import apiHandler from "../api/APIHandler";

const ShoppingCart = ({ cart, match, handleDelete, handleQuantity }) => {
  console.log(cart);
  const productId = match.params.id;
  let product;

  // useEffect(() => {
  //   axios
  //     .get(process.env.REACT_APP_BACKEND_URL + "/ShoppingCart")
  //     .then(res => {
  //       setRessources(res.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);

  // const [cart, setCart] = useState([]);

  // useEffect(() => {
  //     axios
  //     .get(process.env.REACT_APP_BACKEND_URL + "/ShoppingCart" + vetementId)
  //     .then(res => {
  //         setCart(res.data);
  //     })
  //     .catch(err => {
  //         console.log(err);
  //     })
  // }, []);

  const handleSubmit = index => {
    // e.preventDefault();
    handleDelete(index);
    // console.log(index);
  };

  const handleSubmitBis = (i)=> {
    // e.preventDefault()
    handleQuantity(i);
    // console.log(index);
  };

  // return null;
  return (
    <div className="background">
      <h1 className="title-vetements">Panier</h1>

<div>
      <div className="all-vetements">
        {!Boolean(cart.length) ? (
          <p>Aucun article dans le panier</p>
        ) : (
          cart.map((c, i) => (
        product = c.vetement || c.lingerie,
            <ul key={i} className="list-vetements">
              {/* <li>
                <pre style={{"whiteSpace": "pre-wrap"}}>
                {JSON.stringify(c)}
                </pre>
              </li> */}
              <li className="item-vetement">
                <div>
                  <a href={"/cart/" + c._id}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="item-vetement-image"
                    />
                  </a>
                </div>
              </li>
              <li className="item-vetement">{product.name}</li>
              <li className="item-vetement">{product.description}</li>
              {/* <li className="item-vetement">{l.type}</li>
                <li className="item-vetement">{l.color}</li> */}
              <li className="item-vetement">{c.size}</li>
              <li className="item-vetement">{product.price}€</li>
              <li className="item-vetement">
                {c.quantity}{" "}
                <button
                  onClick={() => {
                    handleSubmitBis(i);
                  }}
                >
                  x
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleSubmit(i);
                  }}
                >
                  Supprimer
                </button>
              </li>
              <li>Total :  
         
          <div key={i} className="list-vetements">
          <div className="item-vetement">
          {product.price * c.quantity }€
          </div>
          </div>
         </li>
            </ul>
          ))
        )}
      </div>
      <div className="totalCase">
      <h2 className="total">Total</h2>
      {!Boolean(cart.length) ? (
          <p>0€</p>
        )  : (
          cart.reduce((sum,curr)=> {
            let pdt = curr.vetement || curr.lingerie
return sum += (pdt.price * curr.quantity ) 
          },0)
          // cart.map((c, i) => (
          // <div key={i} className="list-vetements">
          // <div className="item-vetement">
          // {c.vetement.price * c.quantity}
          // </div>
          // </div>
          // )) 
        )}€
      </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
