export const FETCH_MOVIES = 'FETCH_MOVIES_TYPE';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCESS_TYPE';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE_TYPE';
export const RESEST_STORE = 'RESEST_STORE';

export type MoviesType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
export interface FetchMoviesRequestAction {
  type: typeof FETCH_MOVIES;
}

interface FetchMoviesSuccessAction {
  type: typeof FETCH_MOVIES_SUCCESS;
  payload: {movies: MoviesType[]};
}

interface FetchMoviesFailureAction {
  type: typeof FETCH_MOVIES_FAILURE;
  error: string;
}

export type MoviesAction =
  | {type: typeof FETCH_MOVIES}
  | {type: typeof FETCH_MOVIES_SUCCESS; payload: MoviesType[]}
  | {type: typeof RESEST_STORE}
  | {type: typeof FETCH_MOVIES_FAILURE; payload: string};

export type FetchMoviesRequestActionType = FetchMoviesRequestAction;
export type FetchMoviesSuccessActionType = FetchMoviesSuccessAction;
export type FetchMoviesFailureActionType = FetchMoviesFailureAction;
