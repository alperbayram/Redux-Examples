import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodosAsync = createAsyncThunk("todos/getTodosAsync", async() => {
  const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`);
  return res.data;
})

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    activeFilter: "all",
    isLoading:false,
    error:null,
  },
  reducers: {
    addTodo:{
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: ({ title }) => {
        return{
          payload:{
            id:nanoid(),
            completed:false,
            title,
          }
        }
      },
    },
    toggle: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      item.completed = !item.completed;
    },
    destroy: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },
    changeActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    clearCompleted: (state) => {
      const filtered = state.items.filter((item) => item.completed === false);
      state.items = filtered;
    },
  },
  extraReducers:{
    [getTodosAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getTodosAsync.fulfilled]: (state, action) => {
      state.items= action.payload;
      state.isLoading = false;
    },
    [getTodosAsync.error]: (state, action) => {
      state.isLoading = false;
      state.error=action.error.message;
    },
  },
});

export const selectTodos = (state) => state.todos.items;

export const selectFilterTodos = (state) => {
  if (state.todos.activeFilter === "all") {
    return state.todos.items;
  }
  return state.todos.items.filter((todo) =>
    state.todos.activeFilter === "active"
      ? todo.completed === false
      : todo.completed === true
  );
};

export const { addTodo, toggle, destroy, changeActiveFilter, clearCompleted } =
  todosSlice.actions;
export default todosSlice.reducer;
