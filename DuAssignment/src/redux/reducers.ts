import {combineReducers} from 'redux';
import loginReducer from './login/reducer';
import moviesReducer from './movies/reducer';

export const rootReducer = combineReducers({
  login: loginReducer,
  movies: moviesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
