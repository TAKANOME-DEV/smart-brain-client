import { createContext, useReducer } from "react";
import { LOAD_USER } from "./Constants";
import Reducer from "./Reducer";

const initialState = {
  user: {
    id: "",
    username: "",
    email: "",
    entries: 0,
    joined: "",
  },
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

  const value = {
    error: state.error,
    user: state.user,
    loadUser,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
