import { configureStore } from '@reduxjs/toolkit';

import todosReducer from './todosSlice';

export const createStore = () => configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export const store = createStore();