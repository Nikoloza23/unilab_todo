import deletetodo from "../../assets/delete_forever_FILL0_wght400_GRAD0_opsz48.svg";
import taketodo from "../../assets/done_FILL0_wght400_GRAD0_opsz48 (1).svg";

import "./todoList.scss";

const TodoList = () => {
  return (
    <div className="todo_list_container">
      <h1 className="todo_list_title">Add Your Daily Tasks</h1>
      <div className="todo_pusher">
        <input type="text" placeholder="my task" />
        <button>Add</button>
      </div>
      <ul className="todo_list">
        <li>
          <div className="todo_name">Homework</div>
          <div className="todo_wrapper">
            <div className="todo_take">
              <img src={taketodo} alt="" />
            </div>
            <div className="todo_delete">
              <img src={deletetodo} alt="" />
            </div>
          </div>
        </li>
        <li>
          <div className="todo_name">Grocery Shopping</div>
          <div className="todo_wrapper">
            <div className="todo_take">
              <img src={taketodo} alt="" />
            </div>
            <div className="todo_delete">
              <img src={deletetodo} alt="" />
            </div>
          </div>
        </li>
        <li>
          <div className="todo_name">Homework</div>
          <div className="todo_wrapper">
            <div className="todo_take">
              <img src={taketodo} alt="" />
            </div>
            <div className="todo_delete">
              <img src={deletetodo} alt="" />
            </div>
          </div>
        </li>
        <li>
          <div className="todo_name">Grocery Shopping</div>
          <div className="todo_wrapper">
            <div className="todo_take">
              <img src={taketodo} alt="" />
            </div>
            <div className="todo_delete">
              <img src={deletetodo} alt="" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TodoList;
