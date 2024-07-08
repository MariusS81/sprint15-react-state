import React from "react";
import "./ItemCard.css";

const ItemCard = ({ id, status, description, dueDate, onDelete }) => {
  return (
    <div className="item-card">
      <h3>{id}</h3>
      <p>Status: {status}</p>
      <p>Description: {description}</p>
      <p>Due Date: {dueDate?.toLocaleDateString() || "No due date"}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default ItemCard;
