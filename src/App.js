import './App.css';
import 'animate.css';
import MainPage from './components/Main';
import { TopNav } from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './components/Shop';
import WishList from './components/WishList';
import ShoppingCart from './components/ShoppingCart';
import { useState } from 'react';

function App() {
  const [wishlist, setWishlist] = useState([]);

  const handleWishlistBtn = (wishlisted, setWishlisted, title) => {
    const newList = [...wishlist];
    if (!wishlisted) {
      newList.push(title);
    } else {
      const idx = newList.findIndex((item) => item === title);
      newList.splice(idx, 1);
    }
    setWishlist(newList);
    setWishlisted(!wishlisted);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <TopNav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/shop"
            element={
              <Shop
                onWishlistBtn={(wishlisted, setWishlisted, title) => {
                  handleWishlistBtn(wishlisted, setWishlisted, title);
                }}
                wishlist={wishlist}
              />
            }
          />
          <Route
            path="/wishlist"
            element={<WishList wishlist={wishlist} setWishlist={setWishlist} />}
          />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
