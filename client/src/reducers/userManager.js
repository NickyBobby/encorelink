import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  GET_LOCAL_DATA
} from '../constants/reduxConstants';

const initialState = {
  isFetching: false,
  user: {},
  userId: null,
  userToken: null,
  isLoggedIn: false,
  isError: false,
  errorMessage: ''
};

const userManager = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        userId: action.payload.userId,
        userToken: action.payload.id,
        isLoggedIn: true,
        isFetching: false,
        isError: false,
        errorMessage: ''
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
        errorMessage: action.payload.message
      };
    case LOGOUT:
      return initialState;
    case GET_LOCAL_DATA:
      return {
        ...state,
        userId: action.payload.userId || null,
        userToken: action.payload.userToken || null
      };
    default:
      return state;
  }
};

export default userManager;
export function getUserId(state) { return state.userManager.userId; }
export function getUserToken(state) { return state.userManager.userToken; }
