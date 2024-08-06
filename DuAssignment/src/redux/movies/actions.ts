import {
  FETCH_MOVIES_SUCESS_TYPE,
  MoviesActionTypes,
  FETCH_MOVIES_FAILURE_TYPE,
} from './types';

export const fetchMoviesSuccess = (payload: MoviesActionTypes) => {
  return {
    type: FETCH_MOVIES_SUCESS_TYPE,
    payload,
  };
};

export const fetchMoviesFailure = (payload: MoviesActionTypes) => {
  return {
    type: FETCH_MOVIES_FAILURE_TYPE,
    payload,
  };
};
