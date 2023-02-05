import React from "react";

const TodosList = ({ todos, setTodos, setEditTodo }) => {
  // Delete item ที่ส่งค่า ID นั้นๆ มา
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Function เปลี่ยน สถานะของ Completed Object ให้เป็น True เมื่อมีการ Click
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        //เช็คว่า ID อันที่ส่งมา กับ ID ที่มีอยู่แต่เดิม ตรงกัน
        if (item.id === todo.id) {
          //แล้วให้เปลี่ยนสถานะของ completed จากแต่เดิม false เป็น true
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  // Edit Function
  const handleEdit = ({ id }) => {
    //หา ID ใน Arr เดิม ที่ตรงกับ ID ที่ส่งมา แล้ว Return ค่าที่ตรงกันเก็บไว้ใน ตัวแปร findTodo
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };
  return (
    <div className="list-main">
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(e) => e.preventDefault()}
          />
          <div className="btn-main">
            <button
              className="button-complete task-button"
              onClick={() => handleComplete(todo)}
            >
              <i className="fa fa-check-circle"></i>
            </button>
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(todo)}
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodosList;
