/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import Router from './router';

function App() {
  console.log({store});
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
