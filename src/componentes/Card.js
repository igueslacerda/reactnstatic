import React from "react";
import "./componentesCss/Card.css";

const Card = ({ titulo, children, maxWidth = "", backgroundColor = "" }) => {
  const styles = {};
  if (maxWidth) styles.maxWidth = maxWidth;
  if (backgroundColor) styles.backgroundColor = backgroundColor;

  return (
    <div className="card" style={styles}>
      {titulo !== null && <h4>{titulo}</h4>}
      {children}
    </div>
  );
};

export default Card;
