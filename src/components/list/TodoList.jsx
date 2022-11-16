import { useState } from "react";
import deletetodo from "../../assets/delete_forever_FILL0_wght400_GRAD0_opsz48.svg";
import completedtodo from "../../assets/done_FILL0_wght400_GRAD0_opsz48 (1).svg";

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

  const taskCompleted = (e, id) => {
    e.preventDefault();
    const element = taskList.findIndex((elem) => elem.id == id);

    const newTaskList = [...taskList];

    newTaskList[element] = {
      ...newTaskList[element],
      isCompleted: true,
    };
    setTaskList(newTaskList);
  };

  return (
    <div className="todo_list_container">
      <h1 className="task_title">Add Your Daily Tasks</h1>
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
            <li key={t.id} className={t.isCompleted ? "completed" : "li_style"}>
              <div className="task_name">{t.value}</div>
              <div className="todo_wrapper">
                <div
                  className="completed_task"
                  onClick={(e) => taskCompleted(e, t.id)}
                >
                  <img src={completedtodo} alt="" />
                </div>
                <div
                  className="delete_task"
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
