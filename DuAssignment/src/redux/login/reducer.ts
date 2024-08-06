import {SAVE_USER_DETAILS_TYPE, RESEST_STORE, SET_LANGUGE} from './types';

const initialState = {
  isLoggedIn: false,
  language: 'en',
};

type LoginActionType = {
  type: string;
  payload: LoginPayloadType;
};

export type LoginPayloadType = {
  isLoggedIn: boolean;
  language: string;
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
    case RESEST_STORE:
      return initialState;
    case SET_LANGUGE:
      return {
        ...state,
        language: action.payload.language,
      };
    default:
      return state;
  }
}
