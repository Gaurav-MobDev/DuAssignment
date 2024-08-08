import React, {useEffect, useState} from 'react';
import NetInfo, {NetInfoState} from '@react-native-community/netinfo';
import {useAppSelector} from '../redux/hooks';
import Login from '../screens/login/Login';
import Movies from '../screens/movies/Movies';
import {RootState} from '../redux/reducers';
import {i18n} from '../localization';
import {okAlert as showAlert} from '../utils';

function Router() {
  const {isLoggedIn, language} = useAppSelector(
    (state: RootState) => state.login,
  );

  const [isConnected, setIsConnected] = useState<boolean>(true);
  i18n.locale = language;

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: NetInfoState) => {
      setIsConnected(state.isConnected ?? false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!isConnected) {
      showAlert();
    }
  }, [isConnected]);

  if (isLoggedIn) {
    return <Movies />;
  } else {
    return <Login />;
  }
}
export default Router;
