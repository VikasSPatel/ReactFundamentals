import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  state ={
    albums: [],
  }
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => this.setState({
        albums: response.data,
      }));
  }

  renderAlbumList() {
    const { albums } = this.state;
    console.log(albums);
    return albums.map((album, index) =>
      <Text key={index}>{album.title}</Text>
    );
  }

  render() {
    return (
      <View>
        {
          this.renderAlbumList()
        }
      </View>
    );
  }
}

export default AlbumList;
