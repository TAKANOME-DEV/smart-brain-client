import { createContext, useReducer } from "react";
import { LOAD_USER, SHOW_ERROR } from "./Constants";
import Reducer from "./Reducer";

const initialState = {
  user: {
    id: "",
    username: "",
    email: "",
    entries: 0,
    joined: "",
  },
  error: null,
};

export const Context = createContext(initialState);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const loadUser = (user) => {
    dispatch({
      type: LOAD_USER,
      payload: user,
    });
  };

  const showError = (error) => {
    dispatch({
      type: SHOW_ERROR,
      payload: error,
    });

    setTimeout(() => showError(null), 3000);
  };

  const value = {
    error: state.error,
    user: state.user,
    loadUser,
    showError,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
