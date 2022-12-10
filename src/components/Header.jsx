import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo-react.png";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <div className="header__nav">
          <Link to="Signin">Авторизация</Link>
          <Link to="Signup">Регистрация</Link>
          <Link to="Catalog">Каталог</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
