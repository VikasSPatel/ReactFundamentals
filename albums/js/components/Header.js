import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { headerView, headerText } = styles;
  const { title } = props;
  return (
    <View style={headerView}>
      <Text style={headerText}>
        {title}
      </Text>
    </View>
  );
};

const styles = {
  headerView: {
    paddingTop: 30,
    height: 80,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 2,
    elevation: 2,
    position: 'relative'
  },
  headerText: {
    fontSize: 20,
  }
};
export default Header;
