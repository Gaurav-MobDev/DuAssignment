import {
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES,
  MoviesType,
  FetchMoviesFailureActionType,
  RESEST_STORE,
} from './types';

export const fetchMovies = (page: number) => ({
  type: FETCH_MOVIES,
  payload: page,
});

export const resetStore = () => ({
  type: RESEST_STORE,
});

export const fetchMoviesSuccess = (payload: MoviesType[]) => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload,
  };
};

export const fetchMoviesFailure = (payload: FetchMoviesFailureActionType) => {
  return {
    type: FETCH_MOVIES_FAILURE,
    payload,
  };
};
