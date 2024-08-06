import {
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  MoviesAction,
  RESEST_STORE,
  MoviesType,
  FETCH_MOVIES,
} from './types';

const initialState = {
  error: '',
  loading: false,
  movies: [],
};
export type MoviesState = {
  movies: MoviesType[];
  error: string;
  loading: boolean;
};

export default function moviesReducer(
  state = initialState,
  action: MoviesAction,
) {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        error: '',
        loading: false,
      };
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        movies: [],
        error: action.payload,
        loading: false,
      };
    case RESEST_STORE:
      return initialState;
    default:
      return state;
  }
}
