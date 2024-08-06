import {all, fork} from 'redux-saga/effects';
import {moviesSaga} from './movies/saga';

const rootSaga = function* () {
  yield all([fork(moviesSaga)]);
};

export default rootSaga;
