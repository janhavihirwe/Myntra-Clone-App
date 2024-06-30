import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Content from './components/Content'
import Men from './components/Men'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Wishlist from './components/Wishlist'
import Women from './components/Women'
import Kids from './components/Kids'
import Profile from './components/Profile'
import Bag from './components/Bag'


function App() {
  const [wishlist, setWishlist] = useState([]);
  const [bag, setBag] = useState([]);

  const addToWishlist = (product) => {
    console.log("data added");
    setWishlist((prevWishlist) => [...prevWishlist, product]);
  };
  const addToBag = (product) => {
    console.log('product added')
    setBag((prevBag) => {
      const existingProduct = prevBag.find(item => item.id === product.id);
      if (existingProduct) {
        return prevBag;
      }
      return [...prevBag, product];
    });
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== product.id));
  };
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men addToWishlist={addToWishlist}/>} />
        <Route path="/women" element={<Women addToWishlist={addToWishlist}/>} />
        <Route path="/kids" element={<Kids addToWishlist={addToWishlist}/>} />
        <Route path="/wishlist" element={<Wishlist wishlist={wishlist} addToBag={addToBag} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bag" element={<Bag bag={bag} />} />
      </Routes>
    </>
  )
}

export default App
