import * as types from "./actionType";

const initialState = {
  users: [],
};

const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return { ...state, users: action.payload };
    case types.ADD_USER:
      return { ...state };
    case types.DELETE_USER:
      return { ...state };
    case types.EDIT_USER:
      return { ...state };

    default:
      return state;
  }
};

export default usersReducers;
