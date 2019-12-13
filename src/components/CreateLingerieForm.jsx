import React, { Component } from "react";
import { Link } from "react-router-dom";
import APIHandler from "../api/APIHandler";

export default class CreateLingerie extends Component {
  state = {
    image: null,
    name: "",
    description: "",
    type: "",
    price: 0,
    quantity: "",
    size: []
  };

  handleSubmit = async e => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("image", this.state.image);
    fd.append("name", this.state.name);
    fd.append("description", this.state.description);
    fd.append("type", this.state.type);
    fd.append("price", this.state.price);
    fd.append("quantity", this.state.quantity);
    fd.append("size", JSON.stringify(this.state.size));
    console.log(Array.isArray(this.state.size));

    try {
      await APIHandler.post("/lingeries", fd);
      console.log("terminé");
      this.props.history.push("/lingeries");
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = e => {
    console.log(e.target);
    if (e.target.name === "image") {
      console.log(e.target.files);
      this.setState({ image: e.target.files[0] });
    }
    else if (e.target.name === "size") {
      let copy = [...this.state.size];
      copy.push(e.target.value);
      this.setState({ size: copy });
    } else this.setState({ [e.target.name]: e.target.value });
  };

  // useEffect(() => {
  //   axios
  //     .get(process.env.REACT_APP_BACKEND_URL + "/vetements")
  //     .then(res => {
  //       setVetements(res.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   if (!formValues.vetements) {
  //     formValues.vetements = selectRef.current.value;
  //   }
  //   axios
  //     .post(process.env.REACT_APP_BACKEND_URL + "/vetements", formValues)
  //     .then(res => {
  //       props.history.push("/vetements");
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  // const handleChange = e => {
  //   setFormValues({ ...formValues, [e.target.name]: e.target.value });
  // };
  render() {
    const { image, name, description, type, price, quantity } = this.state;
    return (
      <div>
        <h1>Créer un nouvel article de lingerie</h1>

        <form
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          className="create-form"
        >
          <div className="form-item">
            <label htmlFor="image">Image du produit</label>
            <input
              name="image"
              id="product-image"
              type="file"
              className="product-create"
            />
          </div>

          <div className="form-item">
            <label htmlFor="name">Nom du produit</label>
            <input type="text" name="name" class="product-create" />
          </div>

          <div className="form-item">
            <label htmlFor="description">Description du produit</label>
            <input type="text" name="description" class="product-create" />
          </div>

          <label htmlFor="type">Type du produit</label>
          <select
            className="form-item"
            id="category"
            name="type"
            class="select"
            required
          >
            <option value="-1" disabled selected>
              Choisir un type
            </option>
            <option value="soutien-gorge">soutien-gorge</option>
            <option value="culotte">culotte</option>
            <option value="maillot de bain">maillot de bain</option>
            <option value="homewear">homewear</option>
            <option value="pyjama">pyjama</option>
          </select>

          <div className="form-item">
            <label htmlFor="color">Couleurs disponibles</label>
            <input type="text" name="color" class="product-create" />
          </div>

          <div className="form-item">
            <label htmlFor="size">Tailles disponibles</label>
            <div>
              <input
                type="checkbox"
                name="size"
                className="product-create"
                value="34"
              />
              <label for="34">34</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="size"
                className="product-create"
                value="36"
              />
              <label for="36">36</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="size"
                className="product-create"
                value="38"
              />
              <label for="38">38</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="size"
                className="product-create"
                value="40"
              />
              <label for="40">40</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="size"
                className="product-create"
                value="42"
              />
              <label for="42">42</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="size"
                className="product-create"
                value="44"
              />
              <label for="44">44</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="size"
                className="product-create"
                value="46"
              />
              <label for="46">46</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="size"
                className="product-create"
                value="48"
              />
              <label for="48">48</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="size"
                className="product-create"
                value="50"
              />
              <label for="50">50</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="size"
                className="product-create"
                value="85B"
              />
              <label for="85B">85B</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="size"
                className="product-create"
                value="90B"
              />
              <label for="90B">90B</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="size"
                className="product-create"
                value="95B"
              />
              <label for="95B">95B</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="size"
                className="product-create"
                value="100B"
              />
              <label for="100B">100B</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="size"
                className="product-create"
                value="105B"
              />
              <label for="105B">105B</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="size"
                className="product-create"
                value="85C"
              />
              <label for="85C">85C</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="size"
                className="product-create"
                value="90C"
              />
              <label for="90C">90C</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="size"
                className="product-create"
                value="95C"
              />
              <label for="95C">95C</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="size"
                className="product-create"
                value="100C"
              />
              <label for="100C">100C</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="size"
                className="product-create"
                value="105C"
              />
              <label for="105C">105C</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="size"
                className="product-create"
                value="85D"
              />
              <label for="85D">85D</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="size"
                className="product-create"
                value="90D"
              />
              <label for="90D">90D</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="size"
                className="product-create"
                value="95D"
              />
              <label for="95D">95D</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="size"
                className="product-create"
                value="100D"
              />
              <label for="100D">100D</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="size"
                className="product-create"
                value="105D"
              />
              <label for="105D">105D</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="size"
                className="product-create"
                value="85E"
              />
              <label for="85E">85E</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="size"
                className="product-create"
                value="90E"
              />
              <label for="90E">90E</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="size"
                className="product-create"
                value="95E"
              />
              <label for="95E">95E</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="size"
                className="product-create"
                value="100E"
              />
              <label for="100E">100E</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="size"
                className="product-create"
                value="105E"
              />
              <label for="105E">105E</label>
            </div>
          </div>

          <div className="form-item">
            <label htmlFor="price">Prix du produit</label>
            <input type="number" name="price" class="product-create" />
          </div>

          <div className="form-item">
            <label htmlFor="quantity">Quantité disponible</label>
            <input type="text" name="quantity" class="product-create" />
          </div>

          {/* <select ref={selectRef} name="artist">
        {artists.map((artist, i) => (
          <option key={i} value={artist._id}>
            {artist.name}
          </option>
        ))}
      </select> */}

          <div className="button-create">
            <button className="manage-button" id="button">
              Créer
              <Link to="/lingeries" className="link"></Link>{" "}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
