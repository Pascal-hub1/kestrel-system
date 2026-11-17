// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { companyInfo } from "./pages/data/studioData";

export default function Navbar() {
  return (
    <header>
      <div className="container nav-container">
        <div className="logo">{companyInfo.name}</div>
        <ul className="nav-links">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </header>
  );
}