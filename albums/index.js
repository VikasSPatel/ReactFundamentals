import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './js/components/Header';
import AlbumList from './js/components/AlbumList';

const App = () => (
  <View>
    <Header title="Albums" />
    <AlbumList />
  </View>
);

AppRegistry.registerComponent('albums', () => App);
