import React, { useEffect } from "react";

//import uuid
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    //เมื่อ มีการกดแก้ไขจริง ให้ ส่ง ค่า title เดิมไปยัง setInput
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  //ค่าที่ได้จากการพิมพ์ในช่อง Input
  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  //ค่าจาก value Form เวลากด Submit แล้วนำไปเก็บใน Arr
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      //เมื่อกด Submit ให้ Reset ช่อง input
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <form onSubmit={onFormSubmit} className="form-controls">
      <input
        type="text"
        placeholder="Enter something ...."
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="button-add" type="submit">
        {editTodo ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default Form;
