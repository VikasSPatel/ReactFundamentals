import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './js/components/header';

const App = () => (
  <Header />
);

AppRegistry.registerComponent('albums', () => App);
