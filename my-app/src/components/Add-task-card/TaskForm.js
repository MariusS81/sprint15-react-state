import { useState } from "react";
import "./TaskForm.css";

const CreateTaskForm = (props) => {
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [taskDetails, setTaskDetails] = useState("");
  const [dueDateError, setDueDateError] = useState(null);

  const handleNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const hendleDateChange = (e) => {
    if (e.target.value !== '') {
      setDueDateError(null);
    }
    setDueDate(e.target.value);
  };

  const handleDetailsChange = (e) => {
    setTaskDetails(e.target.value);
  };

  const hendleSubmit = (e) => {
    e.preventDefault();

    if (dueDate === "") {
      setDueDateError("Please select a dueDate before creating a new task!");

      return;
    }

    const newTask = {
      status: taskName,
      dueDate: dueDate,
      description: taskDetails,
    };

    props.onTaskCreate(newTask);

    setTaskName("");
    setDueDate("");
    setTaskDetails("");
    setDueDateError(null);
  };


  const dueDateElement = dueDateError ? <div class="red-color">{dueDateError}</div> : null;

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
          {dueDateElement}
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
