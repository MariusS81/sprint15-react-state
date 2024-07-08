import { useState } from "react";
import "./TaskForm.css";

const CreateTaskForm = (props) => {
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [taskDetails, setTaskDetails] = useState("");

  const handleNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const hendleDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleDetailsChange = (e) => {
    setTaskDetails(e.target.value);
  };

  const hendleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      name: taskName,
      dueDate: dueDate,
      taskDetails: taskDetails,
    };

    console.log("newTask = ", newTask);

    setTaskName("");
    setDueDate("");
    setTaskDetails("");
  };

  return (
    <div>
      <form onSubmit={hendleSubmit}>
        <div className="form-row">
          <label>Task Name</label>
          <input onChange={handleNameChange} type="text" value={taskName} />
        </div>

        <div className="form-row">
          <label>Due Date</label>
          <input onChange={hendleDateChange} type="date" value={dueDate} />
        </div>

        <div className="form-row">
          <label>Task Detail</label>
          <textarea
            onChange={handleDetailsChange}
            name=""
            id=""
            cols="30"
            rows="10"
            value={taskDetails}
          ></textarea>
        </div>

        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};

export default CreateTaskForm;
