import React, { useReducer, useContext } from 'react';
import { Alert } from 'react-native';
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../types';
import { ScreenContext } from '../screen/screenContext';
import { TodoContext } from './todoContext';
import { todoReducer } from './todoReducer';

const INITIAL_STATE = {
  todoItems: [
    { id: '1', title: 'Выучить React Native!' }
  ],
};

export const TodoState = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, INITIAL_STATE);
  const { changeScreen } = useContext(ScreenContext);
  const addTodo = title => dispatch({ type: ADD_TODO, title });
  const updateTodo = (id, options) => dispatch({ type: UPDATE_TODO, id, options });
  const removeTodo = id => {
    Alert.alert(
      'Удалить',
      'Вы уверены, что хотите удалить этот элемент?',
      [
        {
          text: 'Отмена',
          style: 'cancel',
        },
        {
          text: 'Удалить',
          style: 'destructive',
          onPress: () => {
            changeScreen(null);
            dispatch({ type: REMOVE_TODO, id });
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <TodoContext.Provider value={{ ...state, addTodo, removeTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
}