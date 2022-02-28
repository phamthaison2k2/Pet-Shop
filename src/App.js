import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Dogs from './Components/Dogs/Dogs';
import Cart from './Components/Cart/Cart';
import NavBar from './NavBar/NavBar'
import { useState } from 'react';
import { CartContext } from './Contexts/CartContext'

function App() {

  const [myCart, addToCart] = useState([{}])
  const [total, setTotal] = useState(0)

  

  return (
    <CartContext.Provider value={{myCart, addToCart, total, setTotal}}>
      <NavBar/>
      <div className="page-container">

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/dogs" element={<Dogs />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </div>
    </CartContext.Provider>
  );
}

export default App;
