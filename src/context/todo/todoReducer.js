import {
  ADD_TODO,
  CLEAR_ERRORS,
  FETCH_TODO_ITEMS,
  HIDE_LOADER,
  REMOVE_TODO,
  SHOW_ERRORS,
  SHOW_LOADER,
  UPDATE_TODO,
} from "../types";

const handlers = {
  [FETCH_TODO_ITEMS]: (state, { todoItems }) => ({ ...state, todoItems }),

  [SHOW_LOADER]: state => ({ ...state, loading: true }),

  [HIDE_LOADER]: state => ({ ...state, loading: false }),

  [SHOW_ERRORS]: (state, { errors }) => ({ ...state, errors }),

  [CLEAR_ERRORS]: state => ({ ...state, errors: null }),

  [ADD_TODO]: (state, { title, id }) => ({
    ...state,
    todoItems: [...state.todoItems, { id, title }],
  }),

  [REMOVE_TODO]: (state, { id }) => ({
    ...state,
    todoItems: state.todoItems.filter(todo => todo.id !== id),
  }),

  [UPDATE_TODO]: (state, { id, options }) => ({
    ...state,
    todoItems: state.todoItems.map(todo => {
      if (todo.id === id) todo.title = options.title;
      return todo;
    }),
  }),

  DEFAULT: state => state,
};

export const todoReducer = (state, action) => {
  const handler = handlers[action.type] || action.DEFAULT;
  return handler(state, action);
};
