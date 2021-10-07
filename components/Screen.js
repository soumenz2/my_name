import React from 'react';

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
} from 'react-native';

import Searchbar from './searchbar';
import Featurednews from './Featurenews';

const Screen = () => {
  return (
    <View>
      <Searchbar />
      <Featurednews />
    </View>
  );
};
export default Screen;
const styles = StyleSheet.create( {
  view: {
    marginHorizontal: 5,
  },
} );
