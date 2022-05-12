import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Cartctx } from "./store/Context";
import "./styles.css";

const Header = () => {
  const { cart } = useContext(Cartctx);
  return (
    <>
      <span className="header">Cart Context API</span>
      <ul className="nav">
        <li>
          <Link to="/">HomePage</Link>
        </li>
        <li>
          <Link to="/cart">Cart ({cart.length})</Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
