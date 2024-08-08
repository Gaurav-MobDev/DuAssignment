import {call, put, takeLatest} from 'redux-saga/effects';
import {FETCH_MOVIES} from './types';
import {fetchMoviesFailure, fetchMoviesSuccess} from './actions';
import {MOVIES_URL} from '../../utils/Endpoints';
import {fetchMoviesAPI} from '../../network/fetchHelper';
function* fetchMovies(): Generator<any, void, any> {
  try {
    const response = yield call(fetchMoviesAPI, `${MOVIES_URL}`);
    const data = yield response;
    yield put(fetchMoviesSuccess([...data?.results]));
  } catch (e) {
    yield put(fetchMoviesFailure(`${e}` as any));
  }
}

function* moviesSaga() {
  yield takeLatest(FETCH_MOVIES, fetchMovies);
}

export {moviesSaga};
