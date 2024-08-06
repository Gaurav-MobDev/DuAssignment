import {
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  MoviesAction,
  RESEST_STORE,
  MoviesType,
} from './types';

const initialState = {
  error: '',
  movies: [],
};
export type MoviesState = {
  movies: MoviesType[];
  error: string;
};

export default function moviesReducer(
  state = initialState,
  action: MoviesAction,
) {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        error: '',
      };
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        movies: [],
        error: action.payload,
      };
    case RESEST_STORE:
      return initialState;
    default:
      return state;
  }
}
