import React, {useEffect} from 'react';
import {useAppSelector} from '../redux/hooks';
import Login from '../Login';
import Movies from '../Movies';
import {RootState} from '@reduxjs/toolkit/query';
import {i18n} from '../localization';

function Router() {
  const {isLoggedIn} = useAppSelector((state: RootState) => state.login);
  let {language} = useAppSelector((state: RootState) => state.login);

  useEffect(() => {
    console.log({language})
    i18n.locale = language;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (isLoggedIn) {
    return <Movies />;
  } else {
    return <Login />;
  }
}
export default Router;
