import * as WebBrowser from 'expo-web-browser';

import React, {Component} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,

} from 'react-native';
import { MapView } from 'expo';

import { MonoText } from '../components/StyledText';

const { width, height } = Dimensions.get('screen');

export default class Campings extends React.Component {

 static navigationOptions = {
  header: null,
};

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.map}>
          <MapView
          style={{ flex: 1, height: height * 0.5, width }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          />
          </View>
        </ScrollView> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    flex: 1,
  },
});
