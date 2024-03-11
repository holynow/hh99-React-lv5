import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodos = createAsyncThunk("getTodos", async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_TODO_SERVER_URL}`);
  return data;
});

export const addTodos = createAsyncThunk("addTodos", async (todo) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_TODO_SERVER_URL}`,
    todo
  );
  return data;
});
export const updateTodos = createAsyncThunk("updateTodos", async (todo) => {
  const { data } = await axios.put(
    `${process.env.REACT_APP_TODO_SERVER_URL}/${todo.id}`,
    {
      ...todo,
      isDone: !todo.isDone,
    }
  );
  return data;
});
export const editTodos = createAsyncThunk(
  "editTodos",
  async ({ id, title, text }) => {
    const { data } = await axios.patch(
      `${process.env.REACT_APP_TODO_SERVER_URL}/${id}`,
      {
        title,
        text,
      }
    );
    return data;
  }
);
export const deleteTodos = createAsyncThunk("deleteTodos", async (todo) => {
  await axios.delete(`${process.env.REACT_APP_TODO_SERVER_URL}/${todo.id}`);
  return todo.id;
});

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.todos = [...action.payload];
    });
    builder.addCase(addTodos.fulfilled, (state, action) => {
      state.todos = [...state.todos, action.payload];
    });
    builder.addCase(updateTodos.fulfilled, (state, action) => {
      state.todos = state.todos.map((todo) => {
        return todo.id === action.payload.id
          ? { ...todo, isDone: !todo.isDone }
          : todo;
      });
    });
    builder.addCase(editTodos.fulfilled, (state, action) => {
      state.todos = state.todos.map((todo) => {
        return todo.id === action.payload.id;
      });
    });
    builder.addCase(deleteTodos.fulfilled, (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    });
  },
});

export default todoSlice.reducer;
