import React from 'react';
import {useAppSelector} from '../redux/hooks';
import Login from '../screens/login/Login';
import Movies from '../screens/movies/Movies';
import {RootState} from '../redux/reducers';
import {i18n} from '../localization';

function Router() {
  const {isLoggedIn, language} = useAppSelector(
    (state: RootState) => state.login,
  );

  i18n.locale = language;

  if (isLoggedIn) {
    return <Movies />;
  } else {
    return <Login />;
  }
}
export default Router;
