import { createSlice, nanoid } from '@reduxjs/toolkit';

export type todo_type = {
  id: string;
  task: string;
  createdAt: number;
  completed: boolean;
};

const initialState: Array<todo_type> = JSON.parse(
  localStorage.getItem('todos') || '[]'
);

const saveToDb = (todos: Array<todo_type>) => {
  localStorage.removeItem('todos');
  localStorage.setItem('todos', JSON.stringify(todos));
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    createTodo: {
      reducer(_state, { payload }) {
        _state.push(payload);
        saveToDb(_state);
        return _state;
      },
      prepare(task: string) {
        return {
          payload: {
            id: nanoid(),
            task,
            createdAt: Date.now(),
            completed: false,
          },
          meta: null,
          error: null,
        };
      },
    },
    updateTodo: (_state, { payload }) => {
      const updatedTodos = _state.map((todo) => {
        return todo.id === payload.id ? { ...todo, ...payload } : todo;
      });
      saveToDb(updatedTodos);
      return updatedTodos;
    },
    deleteTodo: (_state, { payload }) => {
      const updatedTodos = _state.filter((todo) => todo.id !== payload.id);
      saveToDb(updatedTodos);
      return updatedTodos;
    },
  },
});

export const getTodos = (state: any) => state.todos;

export const getTodo = (state: any, todoId: string) =>
  state.todos.find((todo: todo_type) => todo.id === todoId);

export const { createTodo, updateTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;
