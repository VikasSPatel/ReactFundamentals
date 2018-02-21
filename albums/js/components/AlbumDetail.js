import React from 'react';
import { Text } from 'react-native';

const AlbumDetail = (props) => {
  const { album } = props.data;
  return (
    <Text >{album.title}</Text>
  );
};

export default AlbumDetail;
