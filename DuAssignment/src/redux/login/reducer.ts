import {SAVE_USER_DETAILS_TYPE} from './types';

const initialState = {
  isLoggedIn: false,
};

type LoginActionType = {
  type: string;
  payload: LoginPayloadType;
};

type LoginPayloadType = {
  isLoggedIn: boolean;
};
export default function loginReducer(
  state = initialState,
  action: LoginActionType,
) {
  switch (action.type) {
    case SAVE_USER_DETAILS_TYPE:
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
      };
    default:
      return state;
  }
}
