import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "../types";

const handlers = {
  [ADD_TODO]: (state, { title }) => ({
    ...state,
    todoItems: [
      ...state.todoItems,
      {
        id: Date.now().toString(),
        title,
      }
    ],
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
