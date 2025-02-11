import React from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import "./componentesCss/MenuTop.css";

const MenuTop = () => {
  const { user } = useGlobalContext();

  return (
    <div className="menuTop">
      <div className="dropdown">
        <button className="dropbtn">Inicio&nbsp;&#9662;</button>
        <div className="dropdown-content">
          <a href="#">Item 1</a>
          <a href="#">Item 2</a>
          <a href="#">Item 3</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Opções</button>
        <div className="dropdown-content">
          <a href="#">Item 1</a>
          <a href="#">Item 2</a>
          <a href="#">Item 3</a>
        </div>
      </div>
      <div className="menu-status">
        <p>Usuario logado: {user}</p>
      </div>
    </div>
  );
};

export default MenuTop;
