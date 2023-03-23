import React, {useState} from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What is the task today?"
        className="todo-input"
        value={value}
        onChange={(v) => setValue(v.target.value)}
      />
      <input type="submit" value="Add Task" className="todo-btn" />
    </form>
  );
};

export default TodoForm;
