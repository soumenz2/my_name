import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Button,
  Image
} from 'react-native';
const Subtitle=({children,numberOfLines=2})=>{
  return(
      <Text numberOfLines={numberOfLines} style={styles.title}>
       {children}
      </Text>
  )
}
export default Subtitle;
const styles=StyleSheet.create({
title:{
  color:"#0d0d0c",
  fontSize:14,
  fontWidth:"600"
  }
})
