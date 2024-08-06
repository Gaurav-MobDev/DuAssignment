import {call, put, takeLatest} from 'redux-saga/effects';
import {FETCH_MOVIES_TYPE, FetchMoviesRequestAction} from './types';
import {fetchMoviesFailure, fetchMoviesSuccess} from './actions';

function* fetchMovies(
  action: FetchMoviesRequestAction,
): Generator<any, void, any> {
  try {
    const {
      payload: {userId},
    } = action;
    const response = yield call(fetch, `https://api.example.com/data${userId}`); // Replace with your API
    const data = yield response.json();
    yield put(fetchMoviesSuccess(data));
  } catch (e) {
    yield put(fetchMoviesFailure(e as any));
  }
}

function* moviesSaga() {
  yield takeLatest(FETCH_MOVIES_TYPE, fetchMovies);
}

export {moviesSaga};
