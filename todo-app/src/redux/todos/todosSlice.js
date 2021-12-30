import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        id: "1",
        title: "learn React",
        completed: true,
      },
      {
        id: "2",
        title: "learn nextjs",
        completed: false,
      },
    ],
    activeFilter: "all",
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    toggle: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      item.completed = !item.completed;
    },
    destroy: (state, action) => {
        const id =action.payload;
        const filtered = state.items.filter((item) => item.id !== id);
        state.items = filtered;
    },
    changeActiveFilter: (state, action) => {
        state.activeFilter = action.payload;
    },
    clearCompleted:(state) => {
        const filtered = state.items.filter(item => item.completed === false);
        state.items = filtered;
    },
  },
});

export const selectTodos = (state) => state.todos.items;

export const selectFilterTodos = (state) => {
    if(state.todos.activeFilter === "all") {
        return state.todos.items;
    }
    return state.todos.items.filter((todo) => 
    state.todos.activeFilter === "active" ? todo.completed === false : todo.completed === true,
    )
}

export const { addTodo, toggle, destroy, changeActiveFilter, clearCompleted } = todosSlice.actions;
export default todosSlice.reducer;
