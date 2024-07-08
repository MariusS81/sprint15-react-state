import React from "react";
import "./App.css";
import ItemManager from "./components/Item-Manager/ItemManager";
import CreateTaskForm from "./components/Add-task-card/TaskForm";

function App() {
  return (
    <div className="App">
      <div className="main-content">
        <ItemManager />
        <div className="add-card">
          <h3>Create Task</h3>
          <CreateTaskForm />
        </div>
      </div>
    </div>
  );
}

export default App;
