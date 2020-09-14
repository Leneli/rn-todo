import React, { useReducer } from 'react';
import { TodoContext } from './todoContext';
import { todoReducer } from './todoReducer';

const INITIAL_STATE = {
  todoItems: [
    { id: '1', title: 'Выучить React Native!' }
  ],
};

export const TodoState = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  return <TodoContext.Provider value={{ todoItems: state.todoItems }}>{children}</TodoContext.Provider>;
}