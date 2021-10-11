import { userActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      // the new state will be an object with:
      return {
        ...state,
        currentUser: action.payload,
      };
    //fallback in case none of the action type match the action send to the reducer
    default:
      return state;
  }
};
// export const selectUser = (state) => state.currentUser;
export default userReducer;
