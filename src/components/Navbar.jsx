import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        ClothSwap
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/browse">Browse Clothes</Link>
        <Link to="/list-item">List an Item</Link>
        <Link to="/about">About</Link>
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
}

export default Navbar;