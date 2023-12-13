// ToggleContext.js
import React, { createContext, useReducer, useContext } from 'react';

// Define the initial state
const initialState = {
  isToggled: false,
};

// Create the context
const ToggleContext = createContext();

// Create a reducer function to manage state changes
const toggleReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return {
        ...state,
        isToggled: !state.isToggled,
      };
    default:
      return state;
  }
};

// Create the context provider
const ToggleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(toggleReducer, initialState);

  return (
    <ToggleContext.Provider value={{ state, dispatch }}>
      {children}
    </ToggleContext.Provider>
  );
};

// Create a custom hook to simplify context usage in components
const useToggle = () => {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error('useToggle must be used within a ToggleProvider');
  }
  return context;
};

export { ToggleProvider, useToggle };
