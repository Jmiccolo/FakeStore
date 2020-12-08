import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./containers/Header";
import Body from "./containers/Body";
import Footer from "./containers/Footer";

function App() {
  const[products, setProducts] = useState([]);
  return (
    <div>
    <Router>
      <Header setProducts={setProducts}/>
      <Body products={products} setProducts={setProducts}/>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
