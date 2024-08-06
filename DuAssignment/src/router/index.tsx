import React from 'react';
import {useAppSelector} from '../redux/hooks';
import Login from '../Login';
import Movies from '../Movies';

function Router() {
  const {isLoggedIn} = useAppSelector(state => state.login);
  if (isLoggedIn) {
    return <Movies />;
  } else {
    return <Login />;
  }
}
export default Router;
