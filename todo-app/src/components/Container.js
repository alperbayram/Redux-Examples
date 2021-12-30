import TodoList from './TodoList'

function Container() {

    return (
        <section className="main">
		<input className="toggle-all" type="checkbox" />
		<label htmlFor="toggle-all">
			Mark all as complete
		</label>
        <TodoList />
        </section>
    )
}

export default Container
