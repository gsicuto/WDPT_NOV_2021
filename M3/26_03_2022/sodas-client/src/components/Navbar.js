import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const NavBar = ({user}) => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="home">
        <img src="https://www.pngall.com/wp-content/uploads/8/Coca-Coal-Soda-PNG-High-Quality-Image.png" className="home-img"/>
        <h3>Sodas App</h3>
      </NavLink>
      <div className="nav-links">
        <NavLink to="/sodas" className="link">
          Sodas
        </NavLink>
        <NavLink to="/favorite-sodas" className="link">
          Favorite Sodas
        </NavLink>
        {/* <p>{user.userName}</p> */}
      </div>
    </nav>
  );
};