import { LOAD_USER } from "./Constants";

const Reducer = (state, action) => {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
