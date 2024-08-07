import {call, put, takeLatest} from 'redux-saga/effects';
import {FETCH_MOVIES} from './types';
import {fetchMoviesFailure, fetchMoviesSuccess} from './actions';
import {MOVIES_URL} from '../../utils/Endpoints';

function* fetchMovies(): Generator<any, void, any> {
  try {
    const token =
      'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmI1MGM3OWEyYWEzYTgwY2Q4OTM2NWRiM2JhODUxNSIsIm5iZiI6MTcyMjkzMzIxOS44Nzc2NjEsInN1YiI6IjY2YjFkZTMyYzJkOGUwZWRhYTk5YTg0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vb9ed_m6NkvkzCmZte1aTkTMQZRytPfr6Nj4nt68r-0';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const response = yield call(fetch, `${MOVIES_URL}`, options);
    const data = yield response.json();
    yield put(fetchMoviesSuccess(data?.results));
  } catch (e) {
    yield put(fetchMoviesFailure(e as any));
  }
}

function* moviesSaga() {
  yield takeLatest(FETCH_MOVIES, fetchMovies);
}

export {moviesSaga};
