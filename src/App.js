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
  const [cart, setCart] = useState([]);

  const handleWishlistBtn = (wishlisted, setWishlisted, product) => {
    const newList = [...wishlist];
    if (!wishlisted) {
      newList.push(product);
    } else {
      const idx = newList.findIndex((item) => item.title === product.title);
      newList.splice(idx, 1);
    }
    setWishlist(newList);
    setWishlisted(!wishlisted);
  };

  const handleCartBtn = (addedToCart, setAddedToCart, product) => {
    const newList = [...cart];
    if (!addedToCart) {
      newList.push(product);
    } else {
      const idx = newList.findIndex((item) => item.title === product.title);
      newList.splice(idx, 1);
    }
    setCart(newList);
    setAddedToCart(!addedToCart);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <TopNav currentCart={cart} currentWishlist={wishlist} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/shop"
            element={
              <Shop
                handleWishlistBtn={(wishlisted, setWishlisted, title) => {
                  handleWishlistBtn(wishlisted, setWishlisted, title);
                }}
                handleCartBtn={(addedToCart, setAddedToCart, product) => {
                  handleCartBtn(addedToCart, setAddedToCart, product);
                }}
                currentWishlist={wishlist}
                currentCart={cart}
              />
            }
          />
          <Route
            path="/wishlist"
            element={
              <WishList
                currentWishlist={wishlist}
                currentCart={cart}
                setWishlist={setWishlist}
                setCart={setCart}
              />
            }
          />
          <Route
            path="/cart"
            element={<ShoppingCart setCart={setCart} currentCart={cart} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
