import React from 'react';
import {StyleSheet, TextInput, View, Button} from 'react-native';
const Searchbar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="search here"
        placeholderTextColor="#6666ff"
        width="70%"
        backgroundColor="#ff9999"
      />
      <Button title="search" />
    </View>
  );
};
export default Searchbar;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    borderRadius: 30,
    marginLeft: 15,
  },
});
