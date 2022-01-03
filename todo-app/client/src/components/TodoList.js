import {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle, destroy, selectFilterTodos, getTodosAsync } from "../redux/todos/todosSlice";
import Error from "./Error";
import Loading from "./Loading";

function TodoList() {
  const dispatch = useDispatch();
  const filteredTodos = useSelector(selectFilterTodos);

  const isLoading = useSelector((state) => state.todos.isLoading);
  const error = useSelector((state) => state.todos.error);

  const handleDestroy = (id) => {
    if (window.confirm("are you sure ? ")) {
      dispatch(destroy(id));
    }
  };

  useEffect(() => {
    dispatch(getTodosAsync());
  },[dispatch]);

  if(error){
    return <Error message={error} />
  }
  if(isLoading){
    return <Loading />
  }

  return (
    <ul className="todo-list">
      {filteredTodos.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={item.completed}
              onChange={() => dispatch(toggle({ id: item.id }))}
            />
            <label>{item.title}</label>
            <button
              className="destroy"
              onClick={() => handleDestroy(item.id)}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
