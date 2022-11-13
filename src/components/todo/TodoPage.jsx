import TodoList from "../list/TodoList";
import Navbar from "../navbar/Navbar";
import "./todopage.scss";

const TodoPage = () => {
  return (
    <>
      <Navbar />
      <div className="todo_container">
        <TodoList />
      </div>
    </>
  );
};

export default TodoPage;
