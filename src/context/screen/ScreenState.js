import React, { useReducer } from 'react';
import { CHANGE_SCREEN } from '../types';
import { ScreenContext } from './screenContext';
import { screenReducer } from './screenReducer';

const INITIAL_STATE = null;

export const ScreenState = ({ children }) => {
  const [state, dispatch] = useReducer(screenReducer, INITIAL_STATE);
  const changeScreen = id => dispatch({ type: CHANGE_SCREEN, payload: id });

  return (
    <ScreenContext.Provider value={{ activeId: state, changeScreen }}>
      {children}
    </ScreenContext.Provider>
  );
};
