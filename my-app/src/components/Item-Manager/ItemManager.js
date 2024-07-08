import React, { useState } from "react";
import ItemCard from "../Item-Card/ItemCard";
import CreateTaskForm from "../Add-task-card/TaskForm";
import "./ItemManager.css";

// Variabilă globală items
const items = [
  {
    id: "T-1",
    status: "ToDo",
    description: "Create a Design System for Enum Workspace.",
    dueDate: new Date("06/15/2024"),
  },
  {
    id: "T-2",
    status: "In Progress",
    description: "Create a Design System for Enum Workspace.",
    dueDate: new Date("07/18/2024"),
  },
  {
    id: "T-3",
    status: "Completed",
    description: "Create a Design System for Enum Workspace.",
    dueDate: new Date("08/05/2024"),
  },
  {
    id: "T-4",
    status: "Done",
    description: "Create a Design System for Enum Workspace.",
    dueDate: new Date("07/23/2024"),
  },
  {
    id: "T-5",
    status: "ToDo",
    description: "Create a Design System for Enum Workspace.",
    dueDate: new Date("09/24/2024"),
  },
  {
    id: "T-6",
    status: "Completed",
    description: "Create a Design System for Enum Workspace.",
    dueDate: new Date("10/24/2024"),
  },
  {
    id: "T-7",
    status: "In Progress",
    description: "Create a Design System for Enum Workspace.",
    dueDate: new Date("01/24/2025"),
  },
];

const ItemManager = () => {
  // Utilizare corectă a useState cu denumirea items
  const [itemsState, setItems] = useState(items);

  const handleDeleteCard = (id) => {
    const updatedItems = itemsState.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const handleAddCard = (newTask) => {
    const newCard = {
      id: `T-${itemsState.length + 1}`,
      description: newTask.description,
      dueDate: newTask.dueDate ? new Date(newTask.dueDate) : null,
      status: newTask.status,
    };

    setItems([...itemsState, newCard]);
  };

  return (
    <>
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
      </div>
      <div className="add-card">
        <h3>Create Task</h3>
        <CreateTaskForm onTaskCreate={handleAddCard} />
      </div>
    </>
  );
};

export default ItemManager;
