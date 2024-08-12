import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  REHYDRATE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import rootSaga from './sagas';
import {rootReducer} from './reducers';
import createSensitiveStorage from 'redux-persist-sensitive-storage';
import {MoviesState} from './movies/reducer';
import {LoginPayloadType} from './login/reducer';

export const sensitiveStorageKeys = {
  keychainService: 'du-njk13k1k3jk3j1nkj3k3kj1',
  sharedPreferencesName: 'du-fwjknkjfnwfkjwn32kn2kjn2k3',
};
export const sensitiveStorage = createSensitiveStorage(sensitiveStorageKeys);
const persistConfig = {
  key: 'root',
  storage: sensitiveStorage,
  whitelist: ['login', 'movies'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: {
        warnAfter: 120,
      },
      serializableCheck: {
        ignoredActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PURGE, PERSIST],
      },
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
export type RootState = {
  login: LoginPayloadType;
  movies: MoviesState;
};
const persistor = persistStore(store);

export {store, persistor};
