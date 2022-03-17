import React from "react";
import Logo from "../../assets/images/logo.png";
import "./styles.css";

import { Link } from "react-router-dom";
const Header: React.FC = () => {
  return (
    <header id="menu">
      <div className="wrapper">
        <img className="logo" src={Logo} alt="Logo Spotify" />

        <nav>
          <Link to="">Premium</Link>
          <Link to="/sobre">Suporte</Link>
          <Link to="">Baixar</Link>
          <Link to="divisor"></Link>
          <Link to="">Inscrever-se</Link>
          <Link to="">Entrar</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
