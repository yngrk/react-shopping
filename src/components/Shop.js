import './Shop.css';
import card1img from '../media/compass-item1.jpg';
import card2img from '../media/compass-item2.jpg';
import card3img from '../media/compass-item3.jpg';
import card4img from '../media/compass-item4.jpg';
import { ReactComponent as HeartIcon } from '../media/suit-heart-fill.svg';
import { ReactComponent as CartIcon } from '../media/cart-fill.svg';
import { useEffect, useState } from 'react';

const Shop = (props) => {
  return (
    <div id="Shop">
      <Card
        bgImg={card1img}
        bgPos="60% 55%"
        bgSize="130%"
        product={{
          title: "Adventurer's Compass",
          price: '249.99',
          count: 1,
          description:
            "The Adventurer's Compass is the perfect tool for outdoor adventures. Durable and compact, it features a high-precision needle and crystal-clear display. Never get lost again with this must-have companion. ",
        }}
        animDelay="0"
        animType="fadeInLeft"
        onClickWish={(wishlisted, setWishlisted, product) => {
          props.handleWishlistBtn(wishlisted, setWishlisted, product);
        }}
        onClickCart={(addedToCart, setAddedToCart, product) => {
          props.handleCartBtn(addedToCart, setAddedToCart, product);
        }}
        currentWishlist={props.currentWishlist}
        currentCart={props.currentCart}
      />
      <Card
        bgImg={card2img}
        bgPos="60% 55%"
        bgSize="140%"
        product={{
          title: 'Elite Compass',
          price: '449.99',
          count: 1,
          description:
            "The Elite Compass - designed for the ultimate adventurer. With its advanced accuracy and durable construction, it's the perfect companion for any outdoor exploration. Whether hiking, camping, or simply navigating unknown territory, the Elite Compass will guide you with confidence to your destination.",
        }}
        animDelay="1s"
        animType="fadeInRight"
        onClickWish={(wishlisted, setWishlisted, product) => {
          props.handleWishlistBtn(wishlisted, setWishlisted, product);
        }}
        onClickCart={(addedToCart, setAddedToCart, product) => {
          props.handleCartBtn(addedToCart, setAddedToCart, product);
        }}
        currentWishlist={props.currentWishlist}
        currentCart={props.currentCart}
      />
      <Card
        bgImg={card3img}
        bgPos="50% 50%"
        bgSize="170%"
        product={{
          title: "Ultimate Explorer's Compass",
          price: '599.00',
          count: 1,
          description:
            "Discover the Ultimate Explorer's Compass - the essential tool for any adventure. With its rugged design and advanced navigation features, it will guide you confidently on all your expeditions. Lightweight and compact, it's easy to carry with you on any journey.",
        }}
        animDelay="2s"
        animType="fadeInLeft"
        onClickWish={(wishlisted, setWishlisted, product) => {
          props.handleWishlistBtn(wishlisted, setWishlisted, product);
        }}
        onClickCart={(addedToCart, setAddedToCart, product) => {
          props.handleCartBtn(addedToCart, setAddedToCart, product);
        }}
        currentWishlist={props.currentWishlist}
        currentCart={props.currentCart}
      />
      <Card
        bgImg={card4img}
        bgPos="50% 75%"
        bgSize="320%"
        product={{
          title: 'Summit Compass',
          price: '999.99',
          count: 1,
          description:
            'Introducing the Summit Compass - the ultimate in navigation technology. Precision engineering and superior materials come together to create the ultimate tool for the most demanding explorers. Whether climbing the highest peaks or navigating uncharted territories, the Summit Compass will guide you with unrivaled accuracy and reliability. ',
        }}
        animDelay="3s"
        animType="fadeInRight"
        onClickWish={(wishlisted, setWishlisted, product) => {
          props.handleWishlistBtn(wishlisted, setWishlisted, product);
        }}
        onClickCart={(addedToCart, setAddedToCart, product) => {
          props.handleCartBtn(addedToCart, setAddedToCart, product);
        }}
        currentWishlist={props.currentWishlist}
        currentCart={props.currentCart}
      />
    </div>
  );
};

const Card = (props) => {
  const [wishlisted, setWishlisted] = useState(false);
  const heartColor = wishlisted ? 'red' : 'black';

  const [addedToCart, setAddedToCart] = useState(false);
  const cartColor = addedToCart ? 'blue' : 'black';

  useEffect(() => {
    props.currentWishlist.forEach((item) => {
      if (item.title === props.product.title) setWishlisted(!wishlisted);
      return;
    });
    props.currentCart.forEach((item) => {
      if (item.title === props.product.title) setAddedToCart(!addedToCart);
      return;
    });
  }, []);

  const styles = {
    cardImg: {
      backgroundImage: `url(${props.bgImg})`,
      backgroundSize: props.bgSize,
      backgroundPosition: props.bgPos,
      color: 'white',
    },
  };

  return (
    <div
      className={`card animate__animated animate__${props.animType} animate__delay-${props.animDelay}`}
    >
      <div className="img" style={styles.cardImg}></div>
      <div className="info">
        <div className="title">{props.product.title}</div>
        <div className="description">{props.product.description}</div>
        <div className="price">{props.product.price} €</div>
        <div className="controls">
          <HeartIcon
            className="icon wish"
            style={{ fill: heartColor }}
            onClick={() => {
              props.onClickWish(wishlisted, setWishlisted, props.product);
            }}
          />
          <CartIcon
            className="icon cart"
            style={{ fill: cartColor }}
            onClick={() => {
              props.onClickCart(addedToCart, setAddedToCart, props.product);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;
