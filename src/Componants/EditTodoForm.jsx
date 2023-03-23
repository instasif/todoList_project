import React, { useState } from "react";

const EditTodoForm = ({ editTask, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (event) => {
    event.preventDefault();
    editTask(value, task.id);
    setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Update Task"
        className="todo-input"
        value={value}
        onChange={(v) => setValue(v.target.value)}
      />
      <input type="submit" value="Update" className="todo-btn" />
    </form>
  );
};

export default EditTodoForm;
