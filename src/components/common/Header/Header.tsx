import React, { useState, useEffect } from "react";
import logo from "../../../assets/logo.png";
import cart from "../../../assets/cart.svg";
import location from "../../../assets/location.svg";
import search from "../../../assets/search.svg";
import "./Header.scss";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

function Header() {
  const [city, SetCity] = useState("");

  useEffect(() => {
    fetch("https://api.ipregistry.co/?key=8s8kgbzuac2woc5z")
      .then(function (response) {
        return response.json();
      })
      .then(function (payload) {
        SetCity(payload?.location?.city);
      });
  });

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img src={logo} alt="" />
        </Link>
        <div className="header__search search-header">
          <input className="search-header__input" placeholder="Search..." />
          <div className="search-header__select select">
            <select name="form[]" data-class-modif="form">
              <option value="1">All categories</option>
              <option value="2">Пункт №2</option>
              <option value="3">Пункт №3</option>
              <option value="4">Пункт №4</option>
            </select>
          </div>
          <button className="search-header__button ">
            <img src={search} alt="" />
          </button>
        </div>
        <div className="header__menu menu">
          <div className="menu__item location">
            <img src={location} alt="" />
            <span>
              Delivery to <br />
              <strong>{city}</strong>
            </span>
          </div>
          <Link to="/cart" className="menu__item cart">
            <img src={cart} alt="" />
            <span>{"5"}</span>
          </Link>
          <Link to="/user" className="menu__item user">
            <span></span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
