import {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";

import {changeActiveFilter, selectTodos, clearCompletedTodoAsync} from "../redux/todos/todosSlice"


function Footer() {
	const items = useSelector(selectTodos);
	const itemLeft = items.filter((item) => !item.completed).length;
	const dispatch = useDispatch();
	
	const activeFilter = useSelector((state) => state.todos.activeFilter)

	useEffect(() => {
		localStorage.setItem("activefilter",activeFilter);
	},[activeFilter]);

	const handleclearCompleted = async(id, completed) => {
		await dispatch(clearCompletedTodoAsync({id, data: {completed}}))
	}

    return (
        <footer className="footer">
		<span className="todo-count">
			<strong>{itemLeft} </strong>
			item{itemLeft > 1 && "s"} left
		</span>
		<ul className="filters">
			<li>
				<a className={activeFilter === "all" ? "selected" : ""} href='#/' onClick={() => dispatch(changeActiveFilter("all"))}>All</a>
			</li>
			<li>
				<a href='#/' className={activeFilter === "active" ? "selected" : ""} onClick={() => dispatch(changeActiveFilter("active"))} >Active</a>
			</li>
			<li>
				<a href='#/' className={activeFilter === "completed" ? "selected" : ""} onClick={() => dispatch(changeActiveFilter("completed"))} >Completed</a>
			</li>
		</ul>
		<button className="clear-completed" onClick={(item) => handleclearCompleted(item.id, !item.completed )}>
			Clear completed
		</button>
	</footer>
    )
}

export default Footer
