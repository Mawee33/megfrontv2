import React, { Component} from "react";
import axios from "axios";
// import Vetement from "./views/Vetement";
import SearchBar from "./SearchBar";

const FilteredProduct = () => {
// state = {vetements: [...this.props.vetements] };

// favoriteProducts = e => {
//   const searchQuery = e.target.value;
// }
//   this.setState({ products: favoriteProducts });

//   render() {

  return (
    <div>
    <p>Affinez votre recherche</p>
    <table className="table">
     {/* {this.props.vetements.map((v, i) => ( */}
    {/* //       <SearchBar clbk={this.favoriteProducts} />
    //       <Vetement  */}
    {/* //       key={i}
    //       name={v.name}
    //       image={v.image}
    //       description={v.description}
    //       size={v.size}
    //       color={v.color} />
    //     ))} */}
        {/* // <thead>
        //   <tr>
               <th>Nom</th>
               <th>Description</th>
        //     <th>Couleur</th>
        //     <th>Taille</th>
        //     <th>Prix</th>
        //   </tr>
        // </thead> */}
      </table>
    </div>
  );
};

export default FilteredProduct;