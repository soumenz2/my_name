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
  Image,
  numberOfLines
} from 'react-native';
const Title=({children,numberOfLines=2})=>{
    return(
        <Text numberOfLines={numberOfLines} style={styles.title}>
         {children}
            
        </Text>
    )
}
export default Title;
const styles=StyleSheet.create(
{
  title:{
    color:"#0d0d0c",
    fontWeight:'bold',
    fontSize:18,
    
  }
}
  )