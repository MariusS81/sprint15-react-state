import React, { useState } from "react";
import ItemCard from "../Item-Card/ItemCard";
import "./ItemManager.css";

// Variabilă globală items
const items = [
  {
    id: "T-1",
    status: "ToDo",
    description: "Create a Design System for Enum Workspace.",
    dueDate: "15/06/2024",
  },
  {
    id: "T-2",
    status: "In Progress",
    description: "Create a Design System for Enum Workspace.",
    dueDate: "18/07/2024",
  },
  {
    id: "T-3",
    status: "Completed",
    description: "Create a Design System for Enum Workspace.",
    dueDate: "05/08/2024",
  },
  {
    id: "T-4",
    status: "Done",
    description: "Create a Design System for Enum Workspace.",
    dueDate: "23/07/2024",
  },
  {
    id: "T-5",
    status: "ToDo",
    description: "Create a Design System for Enum Workspace.",
    dueDate: "24/09/2024",
  },
  {
    id: "T-6",
    status: "Completed",
    description: "Create a Design System for Enum Workspace.",
    dueDate: "24/10/2024",
  },
  {
    id: "T-7",
    status: "In Progress",
    description: "Create a Design System for Enum Workspace.",
    dueDate: "24/01/2025",
  },
];

const ItemManager = () => {
  // Utilizare corectă a useState cu denumirea items
  const [itemsState, setItems] = useState(items);

  const handleDeleteCard = (id) => {
    const updatedItems = itemsState.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const handleAddCard = () => {
    const newCard = {
      id: `T-${itemsState.length + 1}`,
      description: "New Task",
      dueDate: "08/07/2024",
    };

    setItems([...itemsState, newCard]);
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <div className="items">
        {itemsState.map((item, index) => (
          <ItemCard
            key={index}
            id={item.id}
            status={item.status}
            description={item.description}
            dueDate={item.dueDate}
            onDelete={handleDeleteCard}
          />
        ))}
      </div>
      <button onClick={handleAddCard}>Adaugă Card Nou</button>
    </div>
  );
};

export default ItemManager;
