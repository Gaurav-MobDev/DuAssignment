import {RESEST_STORE, SAVE_USER_DETAILS_TYPE, SET_LANGUGE} from './types';
export const saveUserDetails = (payload: {isLoggedIn: boolean}) => {
  return {
    type: SAVE_USER_DETAILS_TYPE,
    payload,
  };
};

export const resetStore = () => ({
  type: RESEST_STORE,
});

export const setLanguage = (payload: {language: string}) => {
  return {
    type: SET_LANGUGE,
    payload,
  };
};
