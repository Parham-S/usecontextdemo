import React, { useContext } from "react";
import { Cartctx } from "./store/Context";

const SingleProduct = ({ prod }) => {
  const { cart, setCart } = useContext(Cartctx);
  return (
    <div className="products">
      <img src={prod.image} alt="{prod.name}" />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
        <span>$ {prod.price.substring(0, 3)}</span>
      </div>

      {cart.includes(prod) ? (
        <button
          className="button-8"
          onClick={() => {
            setCart(cart.filter((c) => c.id !== prod.id));
          }}
        >
          Remove From Cart
        </button>
      ) : (
        <button
          className="button-8"
          onClick={() => {
            setCart([...cart, prod]);
          }}
        >
          Add to cart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
