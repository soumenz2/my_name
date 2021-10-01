import React, {useState} from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  ScrollView,
  StyleSheet,
  // eslint-disable-next-line no-unused-vars
  TextInput,
  useColorScheme,
  View,
  // eslint-disable-next-line no-unused-vars
  Button,
  Image,
} from 'react-native';
import Axios from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
const Viewcard = ({style}) => {
  const [details, setDetails] = useState(null);
  const api = 'https://newsapi.org/v2/top-headlines?country=IN&category=business&apiKey=';
  const apiKey = 'd869bd7fb8a34ae4b2ed692c88a1dd4c';
  const FethchDetails = async () => {
    try {
      const {data} = await Axios.get(api+apiKey);
      const details = data.object.articles.sources;
    } catch (error) {
      console.log(error);
      alert("Some error occured");
    }
  };
  return (
    <View style={[styles.container, style]}>
      <Image style={styles.tinyLogo} source={require('../Assets/image.jpg')} />
      <View>
        <Title>
          {' '}
          Hi ,I am Soumen Gupta Pursuuing b.tech from Institute of Engineering
          and management ,kolkata.
        </Title>
        <Subtitle>
          Hi ,I am Soumen Gupta Pursuuing b.tech from Institute of Engineering
          and management ,kolkata.{' '}
        </Subtitle>
      </View>
    </View>
  );
};
export default Viewcard;
const styles = StyleSheet.create({
  tinyLogo: {
    height: 150,
    width: 150,
    alignSelf: 'center',
  },
  container: {
    borderColor: '#13de10',
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    marginHorizontal: 3,
    height: 250,
    width: 330,
    alignContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    borderWidth: 1,
    backgroundColor: '#e6de0b',
    overflow: 'hidden',
    padding: 10,
  },
});
