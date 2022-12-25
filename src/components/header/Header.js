import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <span className="logo">Little Garden Recipies</span>
      <nav>
        <button>Indian</button>
        <button>Italian</button>
      </nav>
    </div>
  );
};
export default Header;
