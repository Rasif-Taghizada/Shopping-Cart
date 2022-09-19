import React, { createContext, useState } from 'react';
import './styles.css';
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Cart from './components/Cart';
import { data } from './data';

export const BookContext = createContext()


function App() {

  const [state, setState] = useState({
    bookList: data,
    cart: [],
  })

  const addToCart = book => setState({
    ...state,
    cart: state.cart.find(cartItem => cartItem.id === book.id)
      ? state.cart.map(cartItem => cartItem.id === book.id ? { ...cartItem, count: cartItem.count + 1 } : cartItem)
      : [...state.cart, { ...book, count: 1 }]
  })

  const increment = id => {
    setState({
      ...state,
      cart: state.cart.map(cartItem => cartItem.id === id
        ? { ...cartItem, count: cartItem.count + 1 }
        : cartItem)
    })
  }

  const decrement = id => {
    setState({
      ...state,
      cart: state.cart.map(cartItem => cartItem.id === id
        ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
        : cartItem)
    })
  }

  const removeFromCart = id => setState({
    ...state,
    cart: state.cart.filter(cartItem => cartItem.id !== id)
  })

  return (
    <BookContext.Provider value={{ state: state, addToCart, increment , decrement , removeFromCart }}>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BookContext.Provider>
  );
}

export default App;
