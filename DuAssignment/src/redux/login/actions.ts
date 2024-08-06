import {SAVE_USER_DETAILS_TYPE} from './types';
export const saveUserDetails = (payload: {isLoggedIn: boolean}) => {
  return {
    type: SAVE_USER_DETAILS_TYPE,
    payload,
  };
};
