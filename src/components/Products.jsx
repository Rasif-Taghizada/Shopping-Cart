import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {BookContext} from "../App"; 

const Products = (props) => {

  const context = useContext(BookContext);
  console.log(context);
  return (
    <div>
      <h2>
        <span>Kitap Listesi</span>
        <Link to="/cart">Sepetim</Link>
      </h2>
      <div className="book">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/51eqjXwFzwL._SX344_BO1,204,203,200_.jpg"
          alt="Simyaci"
        />
        <div>
          <h4>Simyaci</h4>
          <p>Yazar: Paulo Coelho</p>
          <p>Fiyat: &#8378; 19.99</p>
          <button>Sepete Ekle</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
