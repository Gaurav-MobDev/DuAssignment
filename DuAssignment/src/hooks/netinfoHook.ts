import {useEffect, useState} from 'react';
import NetInfo, {NetInfoState} from '@react-native-community/netinfo';

const useNetworkStatus = () => {
  const [isConnected, setIsConnected] = useState<boolean>(true);

  useEffect(() => {
    const handleConnectivityChange = (state: NetInfoState) => {
      setIsConnected(state.isConnected ?? false);
    };
    NetInfo.fetch().then(handleConnectivityChange);
    const unsubscribe = NetInfo.addEventListener(handleConnectivityChange);
    return () => unsubscribe();
  }, []);
  return isConnected;
};

export default useNetworkStatus;
