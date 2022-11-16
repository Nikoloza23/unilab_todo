import { useState } from "react";
import deletetodo from "../../assets/delete_forever_FILL0_wght400_GRAD0_opsz48.svg";
import taketodo from "../../assets/done_FILL0_wght400_GRAD0_opsz48 (1).svg";

import "./todoList.scss";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),
        value: task,
        isCompleted: false,
      };
      setTaskList([...taskList, taskDetails]);
    }
  };

  const deleteTask = (e, id) => {
    e.preventDefault();
    setTaskList(taskList.filter((t) => t.id != id));
  };

  return (
    <div className="todo_list_container">
      <h1 className="todo_list_title">Add Your Daily Tasks</h1>
      <div className="todo_pusher">
        <input
          type="text"
          placeholder="my task"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      {taskList !== [] ? (
        <ul className="todo_list">
          {taskList.map((t) => (
            <li>
              <div className="todo_name">{t.value}</div>
              <div className="todo_wrapper">
                <div className="todo_take">
                  <img src={taketodo} alt="" />
                </div>
                <div
                  className="todo_delete"
                  onClick={(e) => deleteTask(e, t.id)}
                >
                  <img src={deletetodo} alt="" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default TodoList;
