import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import apiHandler from "./api/APIHandler";
// import Menu from "./components/Menu";
import Dropdown from "./components/Dropdown";
import SearchBar from "./components/SearchBar";
import CreateLingerieForm from "./components/CreateLingerieForm";
import CreateVetementForm from "./components/CreateVetementForm";
import Home from "./views/Home";
import Users from "./views/User";
import History from "./views/History";
import Fabrication from "./views/Fabrication";
import ListeVetements from "./views/ListeVetements";
import ListeLingeries from "./views/ListeLingeries";
import ShoppingCart from "./views/ShoppingCart";
import Vetement from "./views/Vetement";
import Lingerie from "./views/Lingerie";
import NotFound from "./views/NotFound";
// import FilteredProduct from "./components/FilteredProduct";
import Footer from "./components/Footer";
import SignUp from "./views/Signup";
import SignIn from "./views/Signin";
import SignOut from "./views/Signin";
import Contact from "./views/Contact";

//partials
import HeaderMain from "./components/HeaderMain";
import SearchResults from "./components/SearchResults";
import NavMobile from "./components/NavMobile";
import ConditionalNav from "./components/ConditionalNav";

// auth
import { useAuth } from "./auth/useAuth";
import UserContext from "./auth/UserContext";
import { ProtectedRoute } from "./auth/ProtectedRoute";
import ManageProducts from "./views/ManageProducts";

function App() {
  const [cart, setCart] = useState([]);
  const { isLoggedIn } = useAuth();
  const [searchResults, setSearchResults] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [navMobileStatus, setNavMobileStatus] = useState(false);

  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    if (localCart !== null) {
      setCart(JSON.parse(localCart));
    }
  }, []);

  const handleNavMobileStatus = () => {
    setNavMobileStatus(!navMobileStatus);
  };

  // const handleNavMobileStatusReverse = () => {
  //   setNavMobileStatus(navMobileStatus);
  // };

  // const handleSearchResults = results => {
  //   if (!results) return setSearchResults([]);
  //   if (!results.vetements.length || results.lingeries.length)
  //     return setSearchResults(results);
  // };

  function searchProduct(searchValue) {
    apiHandler.get(`/search?q=${searchValue}`).then(res => {
      console.log(res.data);
      setSearchResults([res.data.vetements, res.data.lingeries]);
    });
  }

  const handleCart = value => {
    const copy = [...cart];
    copy.push(value);
    localStorage.setItem("cart", JSON.stringify(copy));
    setCart(copy);
  };

  const UserContextValue = {
    currentUser,
    setCurrentUser
  };
  //
  //   const [navMobileStatus, setNavMobileStatus] = useState(false);
  //   const [searchResults, setSearchResults] = useState([]);
  // MANDATORY TO GET/SET currentUser according to server response
  // check src/auth/UserContext
  // const UserContextValue = {
  //   currentUser,
  //   setCurrentUser
  // };

  const handleDelete = index => {
    console.log("delete");
    const filteredCart = cart.filter((item, i) => i !== index);
    setCart(filteredCart);
    localStorage.setItem("cart", JSON.stringify(filteredCart));
  };

  const handleQuantity = index => {
    let deleteItem = null;
    const modifiedQuantity = cart.map((prod, i) => {
      if (i === index) {
        if (prod.quantity <= 1) {
          deleteItem = index;
          // const filteredCart = cart.filter((item, i) => i !== index);
          // setCart(filteredCart);
          // localStorage.setItem("cart", JSON.stringify(filteredCart));
        } else prod.quantity -= 1;
      }
      return prod;
    });

    if (deleteItem !== null) modifiedQuantity.splice(deleteItem, 1);
    console.log("modifed", modifiedQuantity);
    setCart(modifiedQuantity);
    localStorage.setItem("cart", JSON.stringify(modifiedQuantity));
  };

  return (
    // the context provider will make currentUser informations down the component tree
    <UserContext.Provider value={UserContextValue}>
      <ConditionalNav searchClbk={searchProduct}/>
      <React.Fragment>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              console.log("search results", searchResults.length),
              searchResults.length ? (
                <SearchResults data={searchResults} />
              ) : (
                <Home />
              )
            )}
            // component={searchResults.length ? <SearchResults />: Home}
          />
          <Route exact path="/Dropdown" component={Dropdown} />
          <Route path="/users" component={Users} />
          <Route path="/Histoire" component={History} />
          <Route path="/Contact" component={Contact} />
          <Route exact path="/vetements" component={ListeVetements} />
          <Route
            path="/vetements/:id"
            render={props => (
              <Vetement handleCart={handleCart} cart={cart} {...props} />
            )}
          />
          <Route exact path="/lingeries" component={ListeLingeries} />
          <Route
            path="/lingeries/:id"
            render={props => (
              <Lingerie handleCart={handleCart} cart={cart} {...props} />
            )}
          />
          <Route path="/Fabrication" component={Fabrication} />
          <Route path="/SearchBar" component={SearchBar} />
          <Route
            path="/ShoppingCart"
            render={props => (
              <ShoppingCart
                handleCart={handleCart}
                handleDelete={handleDelete}
                handleQuantity={handleQuantity}
                cart={cart}
                {...props}
              />
            )}
          />
          {/* <Route path="/FilteredProduct" component={FilteredProduct} /> */}
          <Route path="/manage-products" component={ManageProducts} />
          <Route path="/create-vetement" component={CreateVetementForm} />
          <Route path="/create-lingerie" component={CreateLingerieForm} />
          <Route
            path="/signin"
            render={props => (
              <SignIn navMobileStatus={handleNavMobileStatus} {...props} />
            )}
          />
          <Route path="/signup" component={SignUp} />
          <Route path="/signout" component={SignOut} />
          {/* else => 404 */}
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </React.Fragment>
    </UserContext.Provider>
  );
}

export default App;
