import { func, shape } from 'prop-types';
import React, { createContext, useContext, useReducer } from 'react';

import l10n from '../l10n';

export const StateContext = createContext();

export const initialState = {
  characters: [],
};

export const globalReducer = (state, action) => {
  switch (action.type) {
    case 'update':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const useStateValue = () => useContext(StateContext);

export const StateProvider = ({ reducer, initialState: state, children }) => (
  <StateContext.Provider value={useReducer(reducer, state)}>
    {children}
  </StateContext.Provider>
);

StateProvider.propTypes = {
  reducer: func,
  initialState: shape({}),
  children: shape({}),
};

StateProvider.defaultProps = {
  reducer: undefined,
  initialState,
  children: undefined,
};
