import React, { createContext } from 'react';
import './styles.css';
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Cart from './components/Cart';
import { data } from './data';

export const BookContext = createContext()


function App() {
  return (
    <BookContext.Provider value={data}>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BookContext.Provider>
  );
}

export default App;
