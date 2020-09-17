import React, { useReducer, useContext } from 'react';
import { Alert } from 'react-native';
import {
  ADD_TODO,
  CLEAR_ERRORS,
  FETCH_TODO_ITEMS,
  HIDE_LOADER,
  REMOVE_TODO,
  SHOW_ERRORS,
  SHOW_LOADER,
  UPDATE_TODO,
} from '../types';
import { ScreenContext } from '../screen/screenContext';
import { TodoContext } from './todoContext';
import { todoReducer } from './todoReducer';
import { URL_DB } from '../../constants/config';
import { Http } from '../../api/http';

const INITIAL_STATE = {
  todoItems: [],
  loading: false,
  errors: null,
};

export const TodoState = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, INITIAL_STATE);
  const { changeScreen } = useContext(ScreenContext);

  // private methods
  const showLoader = () => dispatch({ type: SHOW_LOADER });
  const hideLoader = () => dispatch({ type: HIDE_LOADER });
  const showErrors = errors => dispatch({ type: SHOW_ERRORS, errors });
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  // public methods
  const fetchData = async () => {
    showLoader();
    clearErrors();

    try {
      const data = await Http.get(URL_DB());
      const dataNormalized = Object.keys(data || {}).map(id => ({ id, ...data[id] }));
      dispatch({ type: FETCH_TODO_ITEMS, todoItems: dataNormalized });
    } catch (error) {
      console.log('Fetch Data Error:', error);
      showErrors('Что-то пошло не так...');
    } finally {
      hideLoader();
    }
  };

  const addTodo = async title => {
    clearErrors();

    try {
      const data = await Http.post(URL_DB(), { title });
      dispatch({ type: ADD_TODO, title, id: data.name });
    } catch (error) {
      showErrors('Что-то пошло не так...');
    }
  };

  const updateTodo = async (id, options) => {
    clearErrors();

    try {
      const answer = await Http.patch(URL_DB(id));
      if (!answer.error) dispatch({ type: UPDATE_TODO, id, options });
      else console.log('updateTodo error', answer.error);
    } catch (error) {
      console.log('Fetch Data Error:', error);
      showErrors('Что-то пошло не так...');
    }
  }

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
          onPress: async () => {
            changeScreen(null);
            await Http.delete(URL_DB(id));
            dispatch({ type: REMOVE_TODO, id });
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <TodoContext.Provider value={{ ...state, fetchData, addTodo, removeTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
}