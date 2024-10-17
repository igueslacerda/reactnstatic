import React from "react";
import "./componentesCss/Card.css";

const Card = ({ titulo, children }) => {
  return (
    <div className="card">
      {titulo !== null && <h4>{titulo}</h4>}
      {children}
    </div>
  );
};

export default Card;
