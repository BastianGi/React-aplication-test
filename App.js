import * as React from 'react';
import rootReducer from './src/store/store';
import { Provider } from 'react-redux';
import { createStore } from '@reduxjs/toolkit';
import StackNavigator from './src/navigation/StackNavigator';
import { Pressable, View } from 'react-native';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
}


export default App;