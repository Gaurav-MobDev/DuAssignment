export const FETCH_MOVIES_TYPE = 'FETCH_MOVIES_TYPE';
export const FETCH_MOVIES_SUCESS_TYPE = 'FETCH_MOVIES_SUCESS_TYPE';
export const FETCH_MOVIES_FAILURE_TYPE = 'FETCH_MOVIES_FAILURE_TYPE';

export interface FetchMoviesRequestAction {
  type: typeof FETCH_MOVIES_TYPE;
  payload: {userId: string};
}

interface FetchMoviesSuccessAction {
  type: typeof FETCH_MOVIES_SUCESS_TYPE;
  payload: any;
}

interface FetchMoviesFailureAction {
  type: typeof FETCH_MOVIES_FAILURE_TYPE;
  error: string;
}

export type MoviesActionTypes =
  | FetchMoviesRequestAction
  | FetchMoviesSuccessAction
  | FetchMoviesFailureAction;
