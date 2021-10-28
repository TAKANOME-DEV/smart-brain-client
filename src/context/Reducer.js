import { LOAD_USER, SHOW_ERROR } from "./Constants";

const Reducer = (state, action) => {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SHOW_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
