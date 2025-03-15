import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="nav-heading"><a href>SHOP-<span className="nav-title">CART</span></a></h1>
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/about" >About </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
      
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
